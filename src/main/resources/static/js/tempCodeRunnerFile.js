var socket = new SockJS('/ws');
        stompClient = Stomp.over(socket);