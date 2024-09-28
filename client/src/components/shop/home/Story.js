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
							<h2>Ý NGHĨA THƯƠNG HIỆU</h2>
							<p>
							<strong>Đan Tâm Việt</strong> là nơi gửi gắm tinh hoa thủ công truyền thống Việt Nam, nơi mà mỗi sản phẩm mây tre đan không chỉ đơn thuần là vật dụng, mà là những câu chuyện được kể bằng đôi bàn tay tài hoa và trái tim chân thành. Từ những sợi mây tre mỏng manh, qua bàn tay khéo léo của các nghệ nhân, họ dệt nên những giá trị vượt thời gian, mang hơi thở của thiên nhiên và tinh hoa văn hóa Việt.
							</p>
							<p>
							Mỗi sản phẩm của <strong>Đan Tâm Việt</strong> là một biểu tượng của sự kết nối giữa con người và đất trời, là tình yêu, sự tận tụy mà chúng tôi dành trọn trong từng đường đan, từng chi tiết. Mỗi sản phẩm là một lời nhắc nhở về sự giản dị, tinh tế và sâu lắng, là những giá trị không bao giờ phai nhạt theo thời gian.
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
							<h2>SỨ MỆNH</h2>
							<p>
							<strong>Đan Tâm Việt</strong> khao khát kết nối người tiêu dùng với vẻ đẹp của sự mộc mạc, thanh thoát từ những sợi mây tre và mang lại cảm giác bình yên và sự gắn kết với văn hóa quê hương, qua từng sản phẩm, lan tỏa niềm tự hào về một nền thủ công truyền thống đầy giá trị.
							</p>
							<p>
							Bằng tất cả sự tận tụy và đam mê, <strong>Đan Tâm Việt</strong> tự hào lan tỏa niềm tự hào dân tộc qua từng tác phẩm, như một lời nhắc nhở về vẻ đẹp trường tồn của nghề thủ công truyền thống, vẫn luôn sống động và rực rỡ trong đời sống hiện đại.
							</p>
						</Col>
					</Row>
					<Row className="mb-5">
						<Col md={6}>
						<h2>CAM KẾT</h2>
							<p>
							Chúng tôi cam kết sử dụng nguyên liệu từ thiên nhiên, thân thiện với môi trường và tuân thủ các tiêu chuẩn sản xuất bền vững, nhằm bảo vệ môi trường sống và góp phần xây dựng một tương lai xanh hơn. <strong>Đan Tâm Việt</strong> không ngừng nỗ lực gìn giữ và phát huy giá trị của nghề thủ công truyền thống, đồng thời mang lại cho khách hàng những trải nghiệm gần gũi, ấm áp và gắn kết với văn hóa Việt.
							</p>
							<p>
							Chúng tôi nỗ lực gìn giữ và phát huy giá trị của nghề thủ công truyền thống thông qua việc hợp tác với các nghệ nhân địa phương. Điều này không chỉ tạo ra sản phẩm độc đáo mà còn giúp duy trì văn hóa và truyền thống của quê hương.

							</p>
						</Col>
						<Col md={6}>
							<Image
								src="https://bizweb.dktcdn.net/thumb/grande/100/401/675/files/mayhousedecor-ve-lang-dan-lat-bao-la3.jpg?v=1612687601663"
								fluid
							/>
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
