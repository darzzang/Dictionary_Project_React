import React from 'react'
import { useNavigate } from 'react-router-dom'

const Initial = () => {
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate('/Search')
    }
    
    return (
        <div>
            <button onClick={handleSearch}>검색</button>
        </div>
    //     <div class="main">
	// <div class="wrapper">
	// 	<div class="visualArea">
	// 		<div class="dimArea"></div>
	// 		<div class="container">
	// 			<div class="textArea">
	// 				<h1 class="lgText move-up">COVID-19<br>예방접종 사이트</h1>
	// 				<p class="move-up">국어대사전</p>
	// 				<div class="btnArea move-up">
	// 					<a href="/booking.jsp">접종 예약하기</a>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	
	// 	<!-- footer 영역(include 디렉티브 태그 이용) -->
	// 	<%@ include file="include/footer.jsp" %>
	// </div>
    )
}

export default Initial