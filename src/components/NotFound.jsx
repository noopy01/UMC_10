import React,{useEffect} from 'react';

const NotFound = () => {
    useEffect (()=>{
        window.alert("에러가 발생했습니다. 해당 데이터 요청경로를 확인해주세요!")
    },[]);

    return (  
        <div className="not-found">
            <h2>404</h2>
            <p>Page not found</p>
        </div>
    );
}
 
export default NotFound;