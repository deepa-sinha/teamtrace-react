import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./style.scss";

export default function Login() {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="brand">
                    <img src="/images/logo-full.webp" alt="" />
                </div>

                <div className="signin-container">
                    <h2 className="signin-title">Sign in With</h2>
                    <div className="oauth-buttons">
                        <button className="oauth google">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.817505" width="59" height="59" rx="9.5" stroke="#D3DBE3"></rect>
                                <path d="M29.9999 18.6508C32.6945 18.6508 35.1687 19.5734 37.1438 21.1076L43.2057 15.3243C39.6812 12.2174 35.0676 10.3175 29.9999 10.3175C22.3206 10.3175 15.661 14.6507 12.3096 21.0006L19.0503 26.3221C20.6832 21.8498 24.9624 18.6508 29.9999 18.6508Z" fill="#F44336"></path>
                                <path d="M49.8268 32.8205C49.9309 32.0011 50 31.1653 50 30.3175C50 28.8877 49.8439 27.4955 49.5587 26.1508H30V34.4842H40.8103C39.9358 36.7571 38.3787 38.6804 36.3967 40.0166L43.1624 45.358C46.749 42.2099 49.2033 37.8014 49.8268 32.8205Z" fill="#2196F3"></path>
                                <path d="M18.3333 30.3175C18.3333 28.9118 18.5948 27.5702 19.0504 26.3222L12.3097 21.0006C10.8406 23.7842 10 26.9511 10 30.3175C10 33.6463 10.8251 36.7781 12.2637 39.5391L19.013 34.2108C18.5807 32.9916 18.3333 31.6849 18.3333 30.3175Z" fill="#FFC107"></path>
                                <path d="M30.0003 41.9842C24.9244 41.9842 20.6177 38.7367 19.0132 34.2108L12.264 39.5391C15.599 45.94 22.2833 50.3175 30.0003 50.3175C35.0466 50.3175 39.6482 48.4428 43.1627 45.358L36.397 40.0166C34.569 41.249 32.381 41.9842 30.0003 41.9842Z" fill="#00B060"></path>
                                <path opacity="0.1" d="M29.9997 49.9008C24.1135 49.9008 18.8209 47.4722 15.0789 43.603C18.7419 47.7138 24.0604 50.3175 29.9997 50.3175C35.884 50.3175 41.1584 47.7652 44.8132 43.7188C41.0823 47.5252 35.8299 49.9008 29.9997 49.9008Z" fill="black"></path>
                                <path opacity="0.1" d="M30 34.0675V34.4842H40.8103L40.9792 34.0675H30Z" fill="black"></path>
                                <path d="M49.9903 30.5625C49.9917 30.4804 49.9996 30.3998 49.9996 30.3175C49.9996 30.2942 49.9959 30.2717 49.9958 30.2484C49.9947 30.3534 49.9894 30.4572 49.9903 30.5625Z" fill="#E6E6E6"></path>
                                <path opacity="0.2" d="M30 26.1508V26.5675H49.6426C49.6164 26.43 49.5877 26.2873 49.5587 26.1508H30Z" fill="white"></path>
                                <path d="M49.5587 26.1508H30V34.4842H40.8103C39.1292 38.8535 34.962 41.9842 30 41.9842C23.5567 41.9842 18.3333 36.7608 18.3333 30.3175C18.3333 23.8741 23.5567 18.6508 30 18.6508C32.3364 18.6508 34.4898 19.3686 36.3142 20.552C36.5934 20.7335 36.8815 20.9038 37.1439 21.1076L43.2058 15.3243L43.069 15.2191C39.5616 12.1793 35.0059 10.3175 30 10.3175C18.9543 10.3175 10 19.2718 10 30.3175C10 41.3631 18.9543 50.3175 30 50.3175C40.1961 50.3175 48.5924 42.6821 49.8268 32.8206C49.9309 32.0012 50 31.1653 50 30.3175C50 28.8878 49.8438 27.4955 49.5587 26.1508Z" fill="url(#paint0_linear_811_5847)"></path>
                                <path opacity="0.1" d="M36.3142 20.1353C34.4898 18.952 32.3364 18.2342 30 18.2342C23.5567 18.2342 18.3333 23.4575 18.3333 29.9009C18.3333 29.9712 18.3343 30.0261 18.3355 30.0962C18.4479 23.75 23.627 18.6509 30 18.6509C32.3364 18.6509 34.4898 19.3686 36.3142 20.552C36.5934 20.7335 36.8815 20.9039 37.1438 21.1076L43.2057 15.3243L37.1438 20.691C36.8815 20.4872 36.5934 20.3168 36.3142 20.1353Z" fill="black"></path>
                                <path opacity="0.2" d="M30 10.7342C34.9584 10.7342 39.4715 12.5648 42.9655 15.5535L43.2058 15.3243L43.0224 15.1646C39.5149 12.1248 35.0059 10.3175 30 10.3175C18.9543 10.3175 10 19.2718 10 30.3175C10 30.3878 10.0098 30.4556 10.0105 30.5258C10.1234 19.5772 19.0246 10.7342 30 10.7342Z" fill="white"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_811_5847" x1="10" y1="30.3175" x2="50" y2="30.3175" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0.2"></stop>
                                        <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                        <button className="oauth microsoft">
                            <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.817505" width="59" height="59" rx="9.5" stroke="#D3DBE3"></rect>
                                <path d="M31.1711 29.1426H48.7494V12.6919C48.7494 12.0428 48.2245 11.5165 47.5774 11.5165H31.1711V29.1426Z" fill="#5ACF5F"></path>
                                <path d="M28.8282 29.1426V11.5165H12.4219C11.7747 11.5165 11.2498 12.0428 11.2498 12.6919V29.1426H28.8282Z" fill="#F84437"></path>
                                <path d="M28.8279 31.4926H11.2495V47.9434C11.2495 48.5917 11.7744 49.1185 12.4216 49.1185H28.8279V31.4926Z" fill="#2299F8"></path>
                                <path d="M31.1711 31.4926V49.1185H47.5774C48.2245 49.1185 48.7494 48.5917 48.7494 47.9434V31.4926H31.1711Z" fill="#FFC107"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="divider">
                    <span>OR</span>
                </div>

                <div className="input-group">
                    <TextField
                        fullWidth
                        variant="outlined"
                        defaultValue="deepa.sinha@codelogicx.com"
                        placeholder="Enter email"
                        className="mui-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailOutlineIcon className="mui-icon" />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Enter password"
                        type={showPass ? "text" : "password"}
                        className="mui-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon className="mui-icon" />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPass(!showPass)} edge="end">
                                        {showPass ? <VisibilityOff className="mui-icon-btn" /> : <Visibility className="mui-icon-btn" />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                <a href="#" className="forgot-pass">
                    Forgot password?
                </a>

                <div className="divider">
                </div>

                <div className="login-footer">
                    <button className="login-btn" onClick={() => navigate("/")}>Login</button>
                    <p className="register-text">
                        Don't have an account? <a href="#">Register Now</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
