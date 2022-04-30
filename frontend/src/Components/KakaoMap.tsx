import { useEffect, useState } from "react";

declare global {
    interface Window {
        kakao: any;
    }
} // window 상에 있는 kakao 받아오기
let map = new window.kakao.maps.Map(); // map 전역변수로
let valueOfAdr = "";

function findLatLng(locationName: any) {
    const geocoder = new window.kakao.maps.services.Geocoder(); // geocoder 생성
    geocoder.addressSearch(locationName, function (result: any, status: any) {
        // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {
            const location = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
                map: map,
                position: location,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
                content:
                    '<div style="width:150px;text-align:center;padding:6px 0;">검색위치</div>',
            });

            marker.setMap(map);
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(location);
        } else {
            alert("잘못된 주소입니다.");
        }
    });
}

function getLatLng(position: any) {
    const lat = position.coords.latitude; // 클라이언트 위치 특정 (latitude)
    const lng = position.coords.longitude; // 클라이언트 위치 특정 (longtitude)
    const newLoacation = new window.kakao.maps.LatLng(lat, lng); // 클라이언트 위치값 저장

    const marker = new window.kakao.maps.Marker({
        position: newLoacation, // 마커 위치 지정 (클라이언트 위치)
    }); // 마커 생성

    const iwContent = '<div style="padding:5px;">현위치</div>'; // 마커 메시지 내용

    const infowindow = new window.kakao.maps.InfoWindow({
        position: newLoacation, // 클라이언트 위치
        content: iwContent, // 내용 대입
        tileAnimation: true,
    }); // 마커 메시지 생성

    marker.setMap(null); // 기존 마커 제거
    infowindow.open();

    marker.setMap(map); // 마커 띄우기
    infowindow.open(map, marker); // 마커 메시지 띄우기
    map.setCenter(newLoacation); // 마커 위치로 맵 이동
}

function LatLngERR() {
    // 위치정보를 가져오지 못한 경우 실행되는 함수
    alert("위치 특정에 실패하였습니다.");
}

function KakaoMap() {
    const [findByNav, setFindByNav] = useState(false); // 현위치 버튼 클릭 인식용
    const [findByAdr, setFindByAdr] = useState(0); // 주소찾기 버튼 클릭 인식용

    useEffect(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        map = new window.kakao.maps.Map(mapContainer, mapOption); // 맵 띄우기
    }, []); // 카카오맵 띄우기용 기본 코드

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getLatLng, LatLngERR);
    }, [findByNav]); // 클릭시에 사용자 좌표를 얻어와서 getLatLng 함수 실행

    useEffect(() => {
        if (findByAdr !== 0) findLatLng(valueOfAdr);
    }, [findByAdr]);

    return (
        <div>
            <button
                onClick={() => {
                    setFindByNav(!findByNav);
                }}
            >
                현재위치 보기
            </button>
            {/* nav 좌표 얻어오기용 버튼 */}
            <div style={{ marginTop: "5px" }}>
                <input
                    type={"text"}
                    placeholder="주소를 입력해 주세요"
                    id="address"
                    onChange={(event) => {
                        valueOfAdr = event.target.value;
                    }}
                ></input>
                <button
                    onClick={() => {
                        if (findByAdr === 0) {
                            setFindByAdr(1);
                        } else if (findByAdr === 1) {
                            setFindByAdr(2);
                        } else if (findByAdr === 2) {
                            setFindByAdr(1);
                        }
                    }}
                >
                    주소 찾기
                </button>
            </div>
            {/* 주소찾기용 버튼 */}
            <div
                id="map"
                style={{ height: "500px", width: "500px", marginTop: "5px" }}
            ></div>
            {/* 맵 띄우기용 div */}
        </div>
    );
}

export default KakaoMap;
