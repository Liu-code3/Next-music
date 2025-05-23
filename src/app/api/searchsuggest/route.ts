import { NextResponse } from 'next/server';

// 搜索建议数据
const searchsuggestData = {
    "code": 200,
    "data": {
        "id": 30001,
        "defaultKey": "蓝牙耳机",
        "configKey": [
            {
                "1": "迪士尼Q2"
            },
            {
                "2": "日常元素"
            },
            {
                "3": "珀莱雅"
            },
            {
                "4": "真无线"
            },
            {
                "5": "漫步者"
            }
        ]
    }
}
export async function GET() {
    return NextResponse.json(searchsuggestData);
}
