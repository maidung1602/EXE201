import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../layout";
import React, { Fragment, useContext } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

const StoryComponent = () => {
	return (
		<section className="main-section" style={{ padding: "100px 0 0" }}>
			<Carousel>
				<Carousel.Item>
					<div
						className="hero-section"
						style={{
							backgroundImage: `url('https://madebymaries.com/wp-content/uploads/2021/10/feel-maries.png')`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							color: "#fff",
							padding: "100px 0",
							textAlign: "center",
							height: "400px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Container>
							<Row>
								<Col>
									<h1>Chuyện của Maries</h1>
									<p>Chuyện của Đan Tâm Việt</p>
								</Col>
							</Row>
						</Container>
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div
						className="hero-section"
						style={{
							backgroundImage: `url('https://cdnphoto.dantri.com.vn/9J6rE2rOLqd246m-_NAsxrr71qQ=/zoom/1200_630/2021/07/14/ho-thi-suong-lan-crop-1626253035534.jpeg')`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							color: "#fff",
							padding: "100px 0",
							textAlign: "center",
							height: "400px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Container>
							<Row>
								<Col>
									<h1>Hành Trình Của Những Người Thợ</h1>
									<p>Người thợ của làng nghề truyền thống</p>
								</Col>
							</Row>
						</Container>
					</div>
				</Carousel.Item>

				<Carousel.Item>
					<div
						className="hero-section"
						style={{
							backgroundImage: `url('https://khamphahue.com.vn/Portals/0/Medias/Nam2021/T6/184316352_294250192354965_1138601971043634555_n.jpg')`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							color: "#fff",
							padding: "100px 0",
							textAlign: "center",
							height: "400px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Container>
							<Row>
								<Col>
									<h1>Sản Phẩm Thủ Công Mỹ Nghệ</h1>
									<p>Nét đẹp của sự sáng tạo và truyền thống</p>
								</Col>
							</Row>
						</Container>
					</div>
				</Carousel.Item>
			</Carousel>

			<div className="content-section" style={{ padding: "50px 0" }}>
				<Container></Container>
			</div>

			<div className="content-section" style={{ padding: "50px 0" }}>
				<Container>
					<Row className="mb-5">
						<Col md={8}>
							<h2>CÂU CHUYỆN CỎ BÀNG XỨ HUẾ</h2>
							<p>
								Phò Trạch hay còn được người làng gọi bằng tên thân thương là
								Phò Trạch Đệm, là một trong nhiều ngôi làng yên bình nép mình
								bên dòng sông Ô Lâu đổ ra phá Tam Giang thuộc tỉnh Thừa Thiên
								Huế. Phò Trạch được hình thành cách đây gần 500 năm từ lúc các
								vị chúa Nguyễn hành trình về phương Nam, là địa phương thuộc một
								trong những khu vực có địa hình thấp trũng nên hầu như năm nào
								cũng bị ảnh hưởng lũ lụt. Thế nhưng người dân nơi đây lại được
								thừa hưởng từ cha ông nghề thủ công đan lát truyền thống và độc
								đáo từ cây Cỏ Bàng.
							</p>
						</Col>
						<Col md={4}>
							<Image
								src="https://static-images.vnncdn.net/files/publish/2022/7/6/nghe-quanh-nam-ngoi-gay-tay-bien-co-dai-thanh-hang-hieu-0f3eb00aba4d4f068cd4a704e60cbb62.jpeg?width=0&s=5dndGeaEnHGHtrTwKuSGmg"
								fluid
							/>
						</Col>
					</Row>
					<Row className="mb-5">
						<Col md={4}>
							<Image
								src="https://heritagevietnamairlines.cdn.vccloud.vn/wp-content/uploads/2023/07/NTT51371-scaled.jpg"
								fluid
							/>
						</Col>
						<Col md={8}>
							<h2>Các họa sĩ của Maries</h2>
							<p>
								Maries là thương hiệu hàng thủ công mỹ nghệ của Việt Nam, được
								thành lập chính thức tại Thành phố Huế vào tháng 4 năm 2021 đúng
								vào thời điểm cả nước bị ảnh hưởng nặng nề bởi Covid-19. Maries
								sản xuất và quảng bá các sản phẩm thời trang handmade, đáp ứng
								xu hướng hiện nay, dựa trên các kỹ năng thủ công truyền thống,
								kết nối những ngành nghề truyền thống có tuổi đời hàng trăm năm
								với nhau – là nơi có những nghệ nhân, nông dân là phụ nữ đã gắn
								bó với nghề qua nhiều thế hệ tại Huế. Sản phẩm chủ đạo gồm Túi
								xách, Nón, Mũ, Ví, được làm với một quy trình khép kín từ Cây Cỏ
								Bàng.
							</p>
						</Col>
					</Row>
					<Row className="mb-5">
						<Col md={6}>
							<p>
								Khác với cây Cói ở miền Bắc, cây Cỏ Bàng xứ Huế có từng đốt nhỏ,
								rỗng ruột và không có phần xốp bên trong. Khác với cây Cỏ Bàng
								miền Tây bởi thân cây Cỏ Bàng Huế nhỏ, đường kính chỉ tầm 0,4cm
								trở lại...
							</p>
							<p>
								Tuy mang trong mình một làng nghề thủ công có giá trị về lịch
								sử, văn hóa và truyền thống nhưng sự phát triển của làng nghề
								đan lát Cỏ Bàng xứ Huế cũng đang đối mặt với không ít thách
								thức...
							</p>
						</Col>
						<Col md={6}>
							<Image
								src="https://dantra.vn/uploads/san-pham/thoi-trang/tui-di-bien/tui-coi-thoi-trang-7.jpg"
								fluid
							/>
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<Image
								src="https://dantra.vn/uploads/san-pham/thoi-trang/tui-di-bien/tui-coi-thoi-trang-6.jpg"
								fluid
							/>
						</Col>
						<Col md={6}>
							<p>
								Trong khi nhu cầu của xã hội hiện đại ngày càng cao mà sản phẩm
								ở địa phương lại chưa đáp ứng được ước muốn của thị trường. Cộng
								đồng đứng trước nguy cơ mất đi nghề truyền thống...
							</p>
							<p>
								Một sứ mệnh đã bắt đầu như một nhóm trong chúng tôi, ước muốn
								gây dựng sản phẩm hàng thủ công có thương hiệu, mang tính độc
								đáo và có giá trị thẩm mỹ cao với sứ mệnh nuôi dưỡng và nâng cao
								giá trị của nghề truyền thống Huế... Trong khi nhu cầu của xã
								hội hiện đại ngày càng cao mà sản phẩm ở địa phương lại chưa đáp
								ứng được ước muốn của thị trường. Cộng đồng đứng trước nguy cơ
								mất đi nghề truyền thống. Nhưng những người phụ nữ nơi đây vẫn
								luôn muốn giữ gìn và phát triển nghề đệm bàng truyền thống Phò
								Trạch. Một sứ mệnh đã bắt đầu nhen nhóm trong chúng tôi, ước
								muốn gầy dựng sản phẩm hàng thủ công có thương hiệu, mang tính
								độc đáo và có giá trị thẩm mỹ cao với sứ mênh nuôi dưỡng và nâng
								cao giá trị của nghề truyền thống Huế. Đồng thời cùng cộng đồng
								xây dựng sinh kế bền vững hơn, vừa duy trì được công việc truyền
								thống ngay tại quê hương mình, vừa nâng cao thu nhập.
							</p>
						</Col>
					</Row>
					<Row className="mb-5 mt-5">
						<Col>
							<div
								className="image-section"
								style={{
									position: "relative",
									textAlign: "center",
									color: "white",
								}}
							>
								<Image
									src="https://heritagevietnamairlines.cdn.vccloud.vn/wp-content/uploads/2023/07/NTT51371-scaled.jpg"
									fluid
									style={{ width: "100%", borderRadius: "8px" }}
								/>
								<div
									className="centered-text"
									style={{
										position: "absolute",
										top: "50%",
										left: "50%",
										transform: "translate(-50%, -50%)",
										backgroundColor: "rgba(0, 0, 0, 0.5)",
										padding: "10px 20px",
										borderRadius: "5px",
									}}
								>
									<h2>Các họa sĩ của Maries</h2>
								</div>
							</div>
							<p style={{ marginTop: "20px" }}>
								Maries là thương hiệu hàng thủ công mỹ nghệ của Việt Nam, được
								thành lập chính thức tại Thành phố Huế vào tháng 4 năm 2021 đúng
								vào thời điểm cả nước bị ảnh hưởng nặng nề bởi Covid-19.
							</p>
							<p>
								Maries sản xuất và quảng bá các sản phẩm thời trang handmade,
								đáp ứng xu hướng hiện nay, dựa trên các kỹ năng thủ công truyền
								thống, kết nối những ngành nghề truyền thống có tuổi đời hàng
								trăm năm với nhau – là nơi có những nghệ nhân, nông dân là phụ
								nữ đã gắn bó với nghề qua nhiều thế hệ tại Huế. Sản phẩm chủ đạo
								gồm Túi xách, Nón, Mũ, Ví, được làm với một quy trình khép kín
								từ Cây Cỏ Bàng.
							</p>
						</Col>
					</Row>
					<Row className="mb-5 mt-5">
						<Col md={4}>
							<Image
								src="https://file.baothuathienhue.vn/data2/image/fckeditor/upload/2019/20190716/images/dot.jpg"
								thumbnail
							/>
						</Col>
						<Col md={4}>
							<Image
								src="https://file.baothuathienhue.vn/data2/image/fckeditor/upload/2019/20190716/images/dot.jpg"
								thumbnail
							/>
						</Col>
						<Col md={4}>
							<Image
								src="https://file.baothuathienhue.vn/data2/image/fckeditor/upload/2019/20190716/images/dot.jpg"
								thumbnail
							/>
						</Col>
					</Row>
					<Row className="mb-5 mt-5">
						<Col>
							<p style={{ marginTop: "20px" }}>
								Cảm ơn cuộc đời vì tôi được sinh ra là một người nữ, được trao
								cho đặc quyền thấu hiểu, yêu thương và đồng cảm với những người
								phụ nữ khác, vừa phải làm trọn vẹn vai trò của người mẹ, người
								vợ, người bà, vừa khao khát lao động kiếm tiền chân chính. Với
								Maries, tôi muốn nâng cao vai trò và tiếng nói của người phụ nữ,
								khơi dậy niềm tự hào của họ về cộng đồng, làng quê nơi họ sinh
								sống, là từng bước hiện thực hóa giấc mơ về những “Ngôi nhà hạnh
								phúc – Ngôi làng thịnh vượng”.
							</p>
							<p>
								Maries sản xuất và quảng bá các sản phẩm thời trang handmade,
								đáp ứng xu hướng hiện nay, dựa trên các kỹ năng thủ công truyền
								thống, kết nối những ngành nghề truyền thống có tuổi đời hàng
								trăm năm với nhau – là nơi có những nghệ nhân, nông dân là phụ
								nữ đã gắn bó với nghề qua nhiều thế hệ tại Huế. Sản phẩm chủ đạo
								gồm Túi xách, Nón, Mũ, Ví, được làm với một quy trình khép kín
								từ Cây Cỏ Bàng.
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	);
};

const Story = (props) => {
	return (
	  <Fragment>
		<Layout children={< StoryComponent />} />
	  </Fragment>
	);
  };
  

export default Story;
