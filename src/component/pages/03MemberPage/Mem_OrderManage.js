import "./css/memberpage.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { AccountContext} from "../../../ContextAPI";
import { useContext, useEffect, useState } from "react";
import MemberforRatesForms from "./MemberforRatesForms";

const Mem_OrderManage = () =>{
    const { userAccount, setUserAccount} = useContext(AccountContext);
    const { register, handleSubmit, watch, setError, getValues,formState: { errors } } = useForm({
        mode:"onSubmit",
        reValidateMode:"onBlur",

    });
    const [transInfo, setTransInfo] = useState([]);
    
    const apiUrl = process.env.REACT_APP_API_URL;

    
    useEffect(() => {
        const fetchTransInfo = async () => {
            try {
                const url = `${apiUrl}/modifyMemberSide/viewTrans`;
                const response = await axios.post(url, { userAccount });
                console.log(response.data);
                

                const updatedTransInfo = await Promise.all(response.data.map(async item => {
                    const recordUrl = `${apiUrl}/modifyMemberSide/viewRecord`;
                    const rId = item.rId;
                    const recordResponse = await axios.post(recordUrl, { rId });
                    return { ...recordResponse.data, ...item };
                }));

                setTransInfo(updatedTransInfo);
                console.log("new:", updatedTransInfo);
            } catch (error) {
                console.error("Error fetching transaction info:", error);
            }
        };

        fetchTransInfo();
    }, [userAccount]);

    

    const onSubmit = (data) => {
        
    }

    return(
        <div className="Mem_OrderManageBG">
            <Container>
                <Col>
                    <Row>
                        <div className="Mem_OrderManageBG">

                            {transInfo.map(info => (
                            <div key={info.rId} className="Mem_OrderManage">

                                <MemberforRatesForms info={info}/>
                                {/* <div className="Mem_Transaction">
                                    <div className="Mem_Trans_Title">
                                        <div className="Mem_Trans_Num">交易編號：{info.rId}</div>
                                        
                                        <div className="Mem_Trans_Return"><Button variant="info" onClick={returnMer}>退貨</Button></div>
                                    </div>
                                </div>
                                <div className="Mem_Trans_divider"></div>
                                <div className="Mem_Trans_Main">
                                    <div className="Mem_Trans_Items">
                                        <div className="Mem_Trans_OrderStatus">
                                            <div className="Mem_Trans_OrderStatusDecoration">訂單狀態：{info.tState}</div>
                                            <div className="Mem_Trans_OrderStatusDecoration">收件人：{info.recipient}</div>
                                            <div className="Mem_Trans_OrderStatusDecoration">收件人電話：{info.reciPhone}</div>
                                            <div className="Mem_Trans_OrderStatusDecoration">寄送方式：{info.tDelivery}</div>
                                            <div className="Mem_Trans_OrderStatusDecoration">寄件地址：{info.tAddress}</div>
                                            <div className="Mem_Trans_OrderStatusDecoration">付款狀態：{info.payState}</div>
                                            
                                        </div>
                                        <div className="Mem_Trans_CartItem">
                                            <div style={{display:"flex"}}>
                                                
                                                <NavLink to="#"><img src={tanqueray} alt=""></img></NavLink>
                                                <div style={{display:"inline"}}>
                                                    <NavLink to="#"><div style={{fontSize:"18px"}}><b>坦奎瑞琴酒</b><br/></div></NavLink>
                                                    <div style={{fontSize:"14px"}}>
                                                        
                                                        <br/>　數量　|　2
                                                        <br/>　小計　|　$1320
                                                    </div>  
                                                </div>
                                            </div>
                                            <div className="CartAmountControl">
                                                

                                            </div>
                                        </div>
                                        <div className="Mem_Trans_CartItem">
                                            <div style={{display:"flex"}}>
                                                
                                                <NavLink to="#"><img src={tanqueray} alt=""></img></NavLink>
                                                <div style={{display:"inline"}}>
                                                    <NavLink to="#"><div style={{fontSize:"18px"}}><b>坦奎瑞琴酒</b><br/></div></NavLink>
                                                    <div style={{fontSize:"14px"}}>
                                                        
                                                        <br/>　數量　|　2
                                                        <br/>　小計　|　$1320
                                                    </div>  
                                                </div>
                                            </div>
                                            <div className="CartAmountControl">
                                                

                                            </div>
                                        </div>
                                        <div className="Mem_Trans_Totalprice">總計 NT $2,640</div>
                                    </div>
                                    
                                    <div className="Mem_Trans_divider2"></div>
                                    <div className="Mem_Trans_Rating">
                                        <div className="Mem_Trans_Rating_Title"><span>商品評價</span></div>
                                        <form name="MemberTransationRatingForm" onSubmit={handleSubmit(onSubmit)}>
                                            <textarea type="text" name="Mem_Trans_Ratings" id="Mem_Trans_Ratings" placeholder="歡迎留下你的評價"
                                            {...register("Mem_Trans_Ratings", {required: true, })} />
                                            {!!errors.Mem_Trans_Ratings && <p>{errors.Mem_Trans_Ratings.message.toString() || "請輸入商品評價"}</p> }
                                            
                                            <div style={{textAlign:"end"}}><Button type="submit" variant="info" className="Mem_Trans_RatingForm_Submit">送出</Button></div>
                                        </form>
                                        <div className="Mem_Trans_divider3"></div>
                                    </div>
                                </div> */}

                            </div>
                            ))}

                        </div>
                    </Row>
                </Col>
            </Container>
        
        </div>
    );
}

export default Mem_OrderManage;