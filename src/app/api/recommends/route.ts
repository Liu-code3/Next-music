import {NextResponse} from "next/server";

const recommendData = {
    code: 200,
    data: {
        "recommends": [
            {
                "id": 55001,
                "picStr": "https://p4.music.126.net/kQqf40w-NFhLXIksQPgSwg==/109951164207184328.jpg",
                "title": "有音乐，正青春"
            },
            {
                "id": 68001,
                "picStr": "https://p4.music.126.net/QtFPuBnRPFatpnGsyNJYhw==/109951163973446450.jpg",
                "title": "情爱的，晚安吧"
            }
        ]
    }
}
export async function GET (){
    return NextResponse.json(recommendData);
}
