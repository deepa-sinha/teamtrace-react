import { Outlet } from 'react-router-dom';
import "./style.scss";

export default function AuthLayout() {
    return (
        <div className="auth-layout">
            <div className="auth-left">
                <div className="auth-left-content">
                    <img src="/images/lockSignUpLogo.svg" alt="" />
                    <p className="auth-left-text">
                        A work and workforce <br /> management and <br />
                        monitoring platform to <br /> help you increasebr <br /> ROI exponentially!
                    </p>
                </div>
            </div>
            <div className="auth-right">
                <Outlet/>
            </div>
        </div>
    );
}
