import { createContext } from "react";
import { ModalContextType } from "../types";

/**
 * Modal 관련 상태와 함수를 제공하는 Context.
 *
 * 이 컨텍스트는 `ModalContextType`을 통해서 Modal의 상태와 관련된 값들을 하위 컴포넌트에게 전달함
 *
 * @type {React.Context<ModalContextType | null>}
 */
const ModalContext = createContext<ModalContextType | null>(null);

export default ModalContext;
