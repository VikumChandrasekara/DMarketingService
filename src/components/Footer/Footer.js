import React from 'react';
import {
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	FooterLogo,
	SocialIcon,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterAddress,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { footerData, footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';

function Footer() {
	return (
		<Section padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<FooterLogo to="/">
							{/* <SocialIcon src="./assets/D.MarketingServiceLogo.png" /> */}
							D.Marketing Service
						</FooterLogo>
						<FooterAddress>
							No:123, Park Road, Colombo07
						</FooterAddress>

						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href=""
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
					</FooterColumn>
					{footerData.map((footerItem, index) => (
						<FooterLinkItems key={index}>
							<FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
							{footerItem.links.map((link, linkIndex) => (
								<FooterLink key={linkIndex} to="/">
									{link}
								</FooterLink>
							))}
						</FooterLinkItems>
					))}
				</FooterGrid>
				<FooterRights>D.Marketing Service © 2023 | Developed by <a href="https://www.linkedin.com/in/vikumch/" target="_blank" style={{color: 'white'}}> Vikum Chandrasekara ( Thrimaa Interactive ) </a></FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;