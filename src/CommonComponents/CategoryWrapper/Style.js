import styled from "styled-components";
import ShopDemoCategory from '../ItemCategory/ShopDemoCategory';
import BagShop from '../ItemCategory/ShopDemoCategory';

export const Wrapper = styled.div`
        display: flex;
        width:100%;
        
        
`;
export const DemoWrapper = styled.div`
        display: flex;
        width:100%;
        flex : 1;
        
`;
export const SideflexWrapper = styled.div`
        display: flex; 
        flex-wrap:wrap;
        flex : 1;      
`;
export const ShopDemoCategoryWidthFifty = styled(ShopDemoCategory)`
width:50%;
`;
export const ShopDemoCategoryWidthHeight = styled(BagShop)`
width:90%;
height:90%;
`;