import { NextResponse } from "next/server";

const categoriesData = {
    code: 200,
    data: {
        "categories": [
            {
                "cid": 1008002,
                "picStr": "https://p4.music.126.net/tKMAm5OvR-2lAj7dnEOhsg==/18623527952924939.jpg",
                "title": "IP周边",
                "tabIndex": 0,
                "targetUrl": "",
                "count": 0,
                "desc": "",
                "type": 0
            },
            {
                "cid": 101000,
                "picStr": "https://p3.music.126.net/PzH4QQKE5R97J9f2V-SvqQ==/18585045045959929.jpg",
                "title": "数码影音",
                "tabIndex": 1,
                "targetUrl": "",
                "count": 0,
                "desc": "",
                "type": 0
            },
            {
                "cid": 55001,
                "picStr": "https://p3.music.126.net/UKhDHWnEMmoOo27PQmDPbA==/19117208672446378.jpg",
                "title": "热销爆品",
                "tabIndex": 2,
                "targetUrl": "",
                "count": 0,
                "desc": "",
                "type": 0
            },
            {
                "cid": 655001,
                "picStr": "https://s2.music.126.net/store/web/img/jifen.png?80e70a148669ef88ccf58bcb9a8955d4",
                "title": "云贝商城",
                "tabIndex": 3,
                "targetUrl": "https://music.163.com/#/login",
                "count": 0,
                "desc": "云贝",
                "type": 1
            }
        ]
    }
}
export async function GET() {
    return NextResponse.json(categoriesData);
}
