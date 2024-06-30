/** @format */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../features/common/headerSlice";
import { Link } from "react-router-dom";
import TemplatePointers from "../../features/user/components/TemplatePointers";

function InternalPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPageTitle({ title: "" }));
	}, []);

	return (
		<div className="w-full h-4/5 bg-base-200">
			<div className="w-full">
				<div className="w-full">
					{/* <TemplatePointers /> */}
					<Link to="/app/dashboard">
						<button className="btn bg-base-100 btn-outline">Get Started</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default InternalPage;
