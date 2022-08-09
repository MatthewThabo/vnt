import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Signature,
// Heading,
} from "./FooterStyle";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
            <FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span 
                style={{ marginLeft: "10px" }}
                >
				Facebook
				</span>
			</i>
            </FooterLink>
		</Column>
		</Row>
	</Container>
    <Signature>
		© All rights reserved | Made with <span style={{ color: "red"}}> ❤ </span>by Thabo
	</Signature>
	</Box>
);
};
export default Footer;
// marginTop: "-50px"
