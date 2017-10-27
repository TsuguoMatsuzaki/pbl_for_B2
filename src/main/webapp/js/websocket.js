
// websocketオブジェクト
var ws;

// ws接続押下時の処理
window.onload = function() {

	// WebSocketオブジェクト作成
	// 接続先は 'ws://localhost:8080/alpaca/ws'
	ws = new WebSocket('ws://' + window.location.host + '/lama/ws');
	update();

	// サーバからのメッセージ受信時の処理
	ws.onmessage = function(message) {

		// messageの中身はmessage.dataに格納
		//console.log(message.data);

		// TODO
		// DOM操作してHTMLに反映
		//$('#log').append('<p>' + message.data + '</p>');	
		if(message.data == "tasks") {
			
			update();
		}
		
	};
}

// send押下時の処理
$('#send').click(function() {
    // TODO
	// テキストデータをinputフィールドから読み込む
	var body = $('#body').val();
	
	// ws経由で送信
	ws.send(body);
});

