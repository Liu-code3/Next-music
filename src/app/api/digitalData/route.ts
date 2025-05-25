import {NextResponse} from "next/server";

const digitalData = {
    code: 200,
    data: {
        "digitalData": {
            "digitalIcon": "https://s2.music.126.net/store/web/img/digitalicon.png?7372764b5995d20d0606eebb88ceeeb4",
            "name": "数字专辑",
            "desc": "(G)I-DLE、王嘉尔数字专辑火热售卖中",
            "buyNow": "立 即 购 买 >",
            "picStr": "https://s2.music.126.net/store/web/img/sprite/pointlist.png?ca0cb76511a01670049b7822cb05fc53",
            "picStr2": "https://p1.music.126.net/mxLEk_AMm0w5gAMThGd14w==/109951166044914127.jpg?param=120y120",
            "picStr1": "https://p2.music.126.net/iFeWO9yxsbKkzNdE7xNNiw==/109951166089730540.jpg?param=120y120"
        }
    }
}

export async function GET() {
    return NextResponse.json(digitalData);
}
