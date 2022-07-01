import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<>
			<div className='w-full h-screen text-white'>
				<img
					className='hidden sm:block absolute w-full h-full object-cover'
					src='https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/df005bae-5b58-4474-97d7-787b93cbd116/NL-en-20220620-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
					alt='/'
				/>
				<div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
				<div className='fixed w-full px-4 py-24 z-50'>
					<div className='max-w-[450px] h-[600] mx-auto bg-black/75 text-white'>
						<div className='max-w-[320px] mx-auto py-16'>
							<h1 className='text-3xl font-bold'>Sign Up</h1>
							<form className='w-full flex flex-col py-4'>
								<input
									className='p-3 my-2 bg-gray-700 rounded'
									type='email'
									placeholder='Email or phone number'
									autoComplete='email'
								/>
								<input
									className='p-3 my-2 bg-gray-700 rounded'
									type='password'
									placeholder='password'
									autoComplete='current-password'
								/>
								<button className='bg-red-600 py-3 my-6 rounded font-bold'>
									Sign Up
								</button>
								<div className='flex justify-between items-center text-sm text-gray-600'>
									<p>
										<input className='mr-2' type='checkbox' />
										Remember me
									</p>
									<p>Need Help?</p>
								</div>
								<p className='py-9'>
									<span className='text-gray-600'>
										Already subscribed to Netflix?
									</span>
									<Link to='/login'> Sign In</Link>{" "}
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
