import { useEffect } from "react";

declare global {
    interface Window {
        kakao: any;
    }
} // Window 라는 인터페이스 선언 및,

interface DivSize {
    width: number;
    height: number;
}

const divSize: DivSize = {
    width: 50,
    height: 475,
}; //div 사이즈

function KaKaoMap() {
    useEffect(() => {
        var mapContainer = document.getElementById("kakaomap"), // 지도를 표시할 div
            mapOption = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        new window.kakao.maps.Map(mapContainer, mapOption);
    }, []);

    return (
        <div>
            <div
                id="kakaomap"
                style={{
                    width: `${divSize.width}%`,
                    height: `${divSize.height}px`,
                }}
            ></div>
        </div>
    );
}

export default KaKaoMap;