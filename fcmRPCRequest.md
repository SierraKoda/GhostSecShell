### Session_Token

| Session_Token | App.m_FCMToken()

### API_Key

| $api_key  |  AIzaSyCgpQNS7rmyQMkHjN6buNlMvVxlpV2RSJg  | 
 
### Request

| POST | https://fcm.googleapis.com/fcm/send |

### Heading

| Content-Type : application/json |

### Body

| curl  https://omnipuppyxx.firebaseio.com  --header "Authentication: key = $api_key" \
    --header Content-Type: "application/json" \
     --data '{ "to" : "omnipuppyxx.web.app/fs2" , "data" : { $ioWrite : $text , "params" :
[ $data, $message ||$ioWrite && $text, $api_key , $App.m_FCMToken ], "baz" : { $fs2.text() },
[ "token" : $m_FCMToken ], "https://fcm.googleapis.com/fcm/send" } } |

