import React, { Fragment } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faPhone,
	faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
	return (
		<Fragment>
			<footer style={{ background: "#143F3E", color: "#ffffff" }}>
				<div className="container-fluid z-10 py-6 px-4 md:px-12">
					<div className="grid grid-cols-12 gap-8">
						<div className="col-span-4 flex justify-center md:justify-end px-24">
							<img src="/Logo_light_font.png" width="140" className="py-6" alt="Logo" /> {/* Reduced width */}
						</div>
						<div className="col-span-3 flex flex-col py-6 ">
							<h5>Địa chỉ</h5>
							<div className="flex space-x-4 py-3">
								<FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '1.5rem' }} className="text-gray-400 hover:text-white" />
								<a
									href="https://maps.app.goo.gl/xwzuJz3jK2np5DMw6"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-white ml-4" style={{ fontSize: '20px', textDecoration: 'none' }}>
									Khu Công nghệ cao Hòa Lạc – Km29 Đại lộ Thăng Long, H. Thạch Thất, TP. Hà Nội
								</a>
							</div>
						</div>
						<div className="col-span-5 flex flex-col py-6 px-12">
							<h5>Liên hệ</h5>
							<div className="flex space-x-4 py-2">
								<FontAwesomeIcon icon={faPhone} style={{ fontSize: '1.5rem' }} className="text-gray-400 hover:text-white" />
								<a
									href="tel:0834235369"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-white ml-4" style={{ fontSize: '20px', textDecoration: 'none' }}>
									+84 (0)355 761 159
								</a>
							</div>
							<div className="flex space-x-4 py-2">
								<FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1.5rem' }} className="text-gray-400 hover:text-white" />
								<a
									href="mailto:dantamviet@gmail.com"
									rel="noopener noreferrer"
									className="text-white hover:text-white ml-4" style={{ fontSize: '20px', textDecoration: 'none' }}>
									dantamviet@gmail.com
								</a>
							</div>
							<div className="flex space-x-4 py-2">
								<FontAwesomeIcon icon={faFacebook} style={{ fontSize: '1.5rem' }} className="text-gray-400 hover:text-white" />
								<a
									href="https://www.facebook.com/dantamviet/?notif_id=1727315130535398&notif_t=follower_invite&ref=notif"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-white ml-4" style={{ fontSize: '20px', textDecoration: 'none' }}>
									Đan Tâm Việt
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					style={{ background: "#152c2c" }}
					className="z-10 py-6 px-4 md:px-12 text-center"
				>
					Develop & Design By Đan Tâm Việt © Copyright {moment().format("YYYY")}
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
