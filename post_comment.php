

<?php
$serverName = "travel98.database.windows.net";  // 填入您的 SQL Server 伺服器名稱
$database = "travel";
$uid = "tsouadmin";         // 填入您的 SQL Server 使用者名稱
$pass = "Qq0989260287";         // 填入您的 SQL Server 密碼

$connectionInfo = [
    "Database" => $database,
    "Uid" => $uid,
    "PWD" => $pass,
];
$conn = sqlsrv_connect($serverName, $connectionInfo);

// 檢查連線是否成功
if ($conn === false) {
    die(print_r(sqlsrv_errors(), true));
}

// 解析 POST 資料
$data = json_decode(file_get_contents("php://input"));

// 初始化回傳的資料結構
$response = ['status' => 'success'];

// 取得用戶輸入的留言內容和用戶ID
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // 使用預處理語句插入資料
    $sql = "INSERT INTO Comments (Name, Email, Message) VALUES (?, ?, ?)";
    $params = array($name, $email, $message);
    $stmt = sqlsrv_query($conn, $sql, $params);

    // 檢查是否成功插入資料
    if ($stmt === false) {
        $response['status'] = 'error';
        $response['message'] = 'Error: ' . print_r(sqlsrv_errors(), true);
    }
}

// 關閉連線
sqlsrv_close($conn);

// 輸出 JSON 格式的回傳資料
header('Content-Type: application/json');
echo json_encode($response);
?>
