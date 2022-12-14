import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, CheckCircleTwoTone, EyeOutlined, SyncOutlined, GoogleOutlined, AppleFilled, FacebookFilled } from '@ant-design/icons';

import "./css/login.css";

const Login = () =>
{
	const [state, setState] = useState(true);
	const handleBlur = (e) =>
	{
		if (validateEmail(e.target.value))
		{
			setState(false);
		}
		else
		{
			setState(true);
		}
	};

	const validateEmail = (email) =>
	{
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	return (
		<div className="container">
			<div className="nav-container">
				<div className="logo-container">
					<h3 className="logo-text">KHEERA</h3>
					<hr />
					<span className="email">CONNECT@KHEERA.CO</span>
				</div>
				<div>
					<Link to="/register"><button className="request-button">Create Account</button></Link>
				</div>
			</div>

			<div className="login-container">
				<h3 className="form-title">Login</h3>
				<div className="form">
					<h5 className="supporting-text">Hey, Enter your details to login to your account</h5>
					<Input
						className="custom-input"
						placeholder="Email Address"
						allowClear
						type="email"
						suffix={state ? <SyncOutlined spin /> : <CheckCircleTwoTone twoToneColor="#52c41a" />}
						onBlur={handleBlur}
						onClick={handleBlur}
					/>
					<Input.Password
						className="custom-input"
						placeholder="Password"
						iconRender={visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />)}
						allowClear
					/>
					<h3>Having trouble loging in?</h3>
					<div >
						<Link to="/user/account"><button className="signin-button">Login</button></Link>
					</div>
				</div>
				<h3 className="extra-text"> &mdash; Or Login with &mdash;</h3>
				<div className="button-container">
					<Button type="secondary" className="icon-button" shape="round" icon={<GoogleOutlined />} size="large">
						Google
					</Button>
					<Button type="secondary" className="icon-button" shape="round" icon={<AppleFilled />} size="large">
						Apple
					</Button>
					<Button type="secondary" className="icon-button" shape="round" icon={<FacebookFilled />} size="large">
						Facebook
					</Button>
				</div>
			</div>
			<h4 className="cr-text">Copyright @ KHEERA 2022 | Privacy Policy</h4>
		</div>
	);
};

export default Login;
