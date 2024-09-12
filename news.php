<?php
$apiKey = 'ce16b559ff4275ac9e4b399003576e80';
$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : 'top-headlines';
$query = isset($_GET['q']) ? $_GET['q'] : '';
$page = isset($_GET['page']) ? $_GET['page'] : 1;

if ($endpoint == 'search') {
    $url = "https://gnews.io/api/v4/search?q=$query&token=$apiKey&lang=en&page=$page";
} else {
    $url = "https://gnews.io/api/v4/top-headlines?token=$apiKey&lang=en&page=$page";
}

$response = file_get_contents($url);
header('Content-Type: application/json');
echo $response;
