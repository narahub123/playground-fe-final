import { createContext } from "react";
import { InputContextType } from "./Input.types";

/**
 * Input 관련 상태와 함수들을 제공하는 Context.
 * 이 컨텍스트는 `InputContextType`을 통해 input 상태와 관련된 값들을 하위 컴포넌트들에게 전달합니다.
 *
 * @type {React.Context<InputContextType | null>}
 */
const InputContext = createContext<InputContextType | null>(null);

export default InputContext;
