import { NextResponse } from "next/server";

const bannersData = {
    "code": 200,
    "data": {
        "banners": [
            {
                "id": 72739605,
                "productId": 0,
                "picId": 109951168054932480,
                "backendPicId": 109951168054940220,
                "addTime": 100,
                "position": 6,
                "type": 0,
                "url": "https://163.lu/LQSPd1",
                "bannerExtJson": null,
                "isSetTime": 1,
                "beginTime": 1668268800000,
                "endTime": null,
                "picStr": "http://p3.music.126.net/8q_LuoC_suPGp_qv7izDZQ==/109951168054932485.jpg",
                "backendPicStr": "http://p4.music.126.net/HzRU8dVJ2eLodD4MwxmbiQ==/109951168054940229.jpg"
            },
            {
                "id": 72739600,
                "productId": 0,
                "picId": 109951168071451650,
                "backendPicId": 109951168071449710,
                "addTime": 100,
                "position": 1,
                "type": 0,
                "url": "https://163.lu/zSmdB2",
                "bannerExtJson": null,
                "isSetTime": 1,
                "beginTime": 1668787200000,
                "endTime": null,
                "picStr": "http://p4.music.126.net/qDrYkYy9geiUMQkvB48Rww==/109951168071451640.jpg",
                "backendPicStr": "http://p3.music.126.net/DBFZ9HfXMoeCEi2_0toLqw==/109951168071449716.jpg"
            },
            {
                "id": 72739601,
                "productId": 0,
                "picId": 109951168065368300,
                "backendPicId": 109951168065365810,
                "addTime": 100,
                "position": 2,
                "type": 0,
                "url": "https://fn.music.163.com/g/xrn/fc0e7ffee1e95ff9a3c7993e9c862567",
                "bannerExtJson": null,
                "isSetTime": 1,
                "beginTime": 1668614400000,
                "endTime": null,
                "picStr": "http://p4.music.126.net/NLPs75MpQz3j-6fZoLxDyg==/109951168065368299.jpg",
                "backendPicStr": "http://p3.music.126.net/d4DfWSFLEZirjJQeD-5akQ==/109951168065365810.jpg"
            },
            {
                "id": 72739602,
                "productId": 0,
                "picId": 109951168063418290,
                "backendPicId": 109951168063416300,
                "addTime": 100,
                "position": 3,
                "type": 0,
                "url": "https://163.lu/zSmdB2",
                "bannerExtJson": null,
                "isSetTime": 1,
                "beginTime": 1668528000000,
                "endTime": null,
                "picStr": "http://p3.music.126.net/eQDfIz6ePDFKzxAMEhq_KA==/109951168063418284.jpg",
                "backendPicStr": "http://p4.music.126.net/awKX0zntEYIopY4rtPEKrw==/109951168063416302.jpg"
            },
            {
                "id": 72739603,
                "productId": 0,
                "picId": 109951168060235950,
                "backendPicId": 109951168060237950,
                "addTime": 100,
                "position": 4,
                "type": 0,
                "url": "https://fn.music.163.com/g/xrn/8292bed80fe25eccbe5f4ca970d2f2ba",
                "bannerExtJson": null,
                "isSetTime": 1,
                "beginTime": 1668441600000,
                "endTime": null,
                "picStr": "http://p3.music.126.net/BZpFoDH9Mmolet2lwmNN6g==/109951168060235949.jpg",
                "backendPicStr": "http://p3.music.126.net/Ojm-xfDYeXZbVx3gRrPHuQ==/109951168060237949.jpg"
            },
            {
                "id": 72739604,
                "productId": 0,
                "picId": 109951168058874880,
                "backendPicId": 109951168058875380,
                "addTime": 100,
                "position": 5,
                "type": 0,
                "url": "https://163.lu/zSmdB2",
                "bannerExtJson": null,
                "isSetTime": 1,
                "beginTime": 1668364500000,
                "endTime": null,
                "picStr": "http://p4.music.126.net/2vgfEvEX2TKto8-XDB1T0g==/109951168058874885.jpg",
                "backendPicStr": "http://p4.music.126.net/zkwlrHx9UpbYmIF0KOHI7w==/109951168058875370.jpg"
            }
        ]
    }
}
export async function GET() {
    return NextResponse.json(bannersData);
}
