import { useEffect } from "react";

const Even = () => {
    // Even Component 언마운트
    // useEffect의 두 번째 parameter가 빈 배열이고,
    // 첫 번째 parameter인 callback 함수가 함수를 리턴하면
    // 컴포넌트가 언마운트될 때 실행 됨
    useEffect(() => {
        return () => {
            console.log('Even 언마운트')
        }
    }, []);

    return (
        <div>짝수입니다</div>
    )
};

export default Even;