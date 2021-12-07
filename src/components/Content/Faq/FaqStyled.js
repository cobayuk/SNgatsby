/*
| ===========================================================
|    This file contains all styles Faq.
| ===========================================================
|
| Table Of Contents
| - Faq ( Frequently Ask Quetions ).
|
| Author  : Sungnikah Corporation's.
| Date    : 2 Februari 2020
| Develop : Dimas Prasetyo, Arie Aditya Nugraha (Frontend Dev).
*/

import styled from 'styled-components';
import  {
	Box,
	Typography,
	Accordion,
	AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { COLORS, FONT_FAMILY, FONT_SIZE } from "@styles/constants";

export const ContainerFaq = styled(Box)`
  display: block;
	margin-top: 200px;
	@media (min-width: 320px) and (max-width: 425px) {
		margin-top: 100px;
	}
`; 

export const HeadingFaqFirst = styled(Typography)`
	font-size: 20px;
	font-family: ${FONT_FAMILY.oxygen};
	font-weight: bold;
	color: ${COLORS.brownSugar};
	text-transform: uppercase;
	margin-bottom: 10px;
`;

export const HeadingFaqSecond = styled(Typography)`
	font-size: 40px;
	@media (min-width: 320px) and (max-width: 425px) {
		font-size: 30px;
  }
	font-family: ${FONT_FAMILY.oxygen};
	font-weight: bold;
	color: ${COLORS.black};
`;

export const HeadingAccordionSummary = styled(AccordionSummary)`
	display: flex;
	&& .MuiAccordionSummary-content {
		display: block;
		font-weight: bold;
	}
	&& .MuiTypography-body1 {
		font-weight: bold;
		font-size: ${FONT_SIZE.font13};
	}
`;

export const MenuAccordion = styled(Accordion)`
	margin-bottom: 15px;
`;

export const ArrowFaq = styled(ExpandMoreIcon)`
	transform: rotateZ(265deg);
`;

export const FaqDescriptions = styled(Typography)`
	font-size: 13px;
	font-style: italic;
`;