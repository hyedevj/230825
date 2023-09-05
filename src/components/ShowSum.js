import { useMemo } from "react";

function sum(n) {
	console.log("Start");
	let result = 0;
	for (let i = 1; i <= n; i += 1) {
		result += i;
	}
	console.log("Finished");
	return result;
}

const ShowSum = ({ label, n }) => {
	//const result = sum(n);
    // 기록해 둘 표현식 (sum(n)), 어떤 상태가 변경되었을 때 실행할 것인지 의존 결정 [n]
	const result = useMemo(() => sum(n), [n])
    
    return (
		<span>
			{label}: {result}
		</span>
	);
};

export default ShowSum;
