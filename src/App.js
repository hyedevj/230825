import Box from "./components/Box";
import Checkbox from "./components/Checkbox";
import useHover from "./hooks/useHover";
import useKeyPress from "./hooks/useKeyPress";
import useToggle from "./hooks/useToggle";

function App() {
	const [on, toggle] = useToggle();
	const [ref, isHover] = useHover();
	const keyPressed = useKeyPress("a");

	console.log(on);

	return (
		<div>
			<Checkbox checked={on} onChange={toggle} />
			
			{isHover ? 'hover' : 'mouseout'}
			<Box ref={ref} />
			
			{keyPressed && "Pressed"}
		</div>
	);
}

export default App;
