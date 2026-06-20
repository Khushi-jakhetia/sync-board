import { Server } from 'socket.io';

export const initializeSocket = (server: any) => {
    const io = new Server(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    });

    io.on('connection', (socket) => {
        console.log(`✅ User connected: ${socket.id}`);

        // Session join
        socket.on('join-session', ({ sessionId, username }) => {
            socket.join(sessionId);
            socket.data.sessionId = sessionId;
            socket.data.username = username;

            const room = io.sockets.adapter.rooms.get(sessionId);

            io.to(sessionId).emit(
                'users-count',
                room ? room.size : 1
            );
            socket.to(sessionId).emit(
            "user-joined",
            username
            );

            console.log(`🟢 ${socket.id} joined session ${sessionId}`);
});

        // Session leave
        socket.on('leave-session', (sessionId) => {
            socket.leave(sessionId);

            const room = io.sockets.adapter.rooms.get(sessionId);

            io.to(sessionId).emit(
                'users-count',
                room ? room.size : 0
            );

            console.log(`🔴 ${socket.id} left session ${sessionId}`);
        });

        // Broadcast drawing within session
        socket.on('draw', (pathData) => {
            const sessionId = socket.data.sessionId;
            if (sessionId) {
                socket.to(sessionId).emit('draw', pathData);
                console.log(`✏️ Drawing in ${sessionId} by ${socket.id}`);
            }
        });

        socket.on('clear', () => {
            const sessionId = socket.data.sessionId;
            if (sessionId) {
                socket.to(sessionId).emit('clear');
                console.log(`🧹 Clear in ${sessionId} by ${socket.id}`);
            }
        });

        socket.on('request-canvas', () => {
            const sessionId = socket.data.sessionId;
            if (sessionId) {
                socket.to(sessionId).emit('send-canvas', socket.id);
            }
        });

        socket.on('canvas-data', ({ to, data }) => {
            io.to(to).emit('canvas-data', { data });
        });

        socket.on('cursor-move', ({ x, y, username }) => {
            const sessionId = socket.data.sessionId;
            if (sessionId) {
                socket.to(sessionId).emit('cursor-move', {
                x,
                y,
                username,
                socketId: socket.id,
                });
            }
        });

        socket.on('disconnect', () => {
            const sessionId = socket.data.sessionId;
            const username = socket.data.username;



        if (sessionId) {
            socket.to(sessionId).emit(
                "user-left",
                username
            );

            socket.to(sessionId).emit(
                "user-disconnected",
                socket.id
            );

            setTimeout(() => {
                const room = io.sockets.adapter.rooms.get(sessionId);

                io.to(sessionId).emit(
                    "users-count",
                    room ? room.size : 0
                );
            }, 100);
        }

            console.log(`❌ User disconnected: ${socket.id}`);
        });
    });

    return io;
};
