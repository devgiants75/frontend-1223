import React, { useReducer } from 'react'

// 카운터 예제는 useReducer 대신 useState를 사용해도 충분히 구현 가능

// 오히려 useState를 사용하는 것이 reducer 함수를 따로 작성하지 않아도 되고, 전체적인 코드 길이가 더 줄어듦

//! 1. state의 형태가 복잡할 때

//? 게임 캐릭터의 상태를 나타내는 복잡한 객체
type GameState = {
  player: {
    name: string;
    level: number;
    items: {
      potions: number;
      coins: number;
      equipment: {
        armor: string;
        weapon: string;
      };
    };
  };
  enemies: number;
  gameStatus: string;
};

const initialState: GameState = {
  player: {
    name: 'Hero',
    level: 1,
    items: {
      potions: 5,
      coins: 100,
      equipment: {
        armor: 'Leather',
        weapon: 'Sword'
      }
    }
  },
  enemies: 5,
  gameStatus: 'Active'
};

//? 게임 상태 업데이트 로직
// 게임 내에서 플레이어의 레벨이 오르거나 아이템을 사용하는 경우

//? useReducer를 사용한 상태 관리
// 리듀서 함수와 함께 사용하는 액션을 정의하고, 이를 통해 상태를 업데이트하는 방법

// Action 타입 정의: 'LEVEL_UP'과 'USE_POTION' 두 가지 액션을 다룹니다.
type Action =
  | { type: 'LEVEL_UP' }
  | { type: 'USE_POTION' };

// gameReducer 함수는 게임의 상태를 업데이트하는 로직을 포함합니다.
// 이 함수는 현재 게임 상태(state)와 액션(action)을 인자로 받아 새로운 상태를 반환합니다.
const gameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    // 'LEVEL_UP' 액션 처리: 플레이어의 레벨을 1 증가시킵니다.
    case 'LEVEL_UP':
      return {
        ...state,
        player: {
          ...state.player,
          level: state.player.level + 1
        }
      };
    // 'USE_POTION' 액션 처리: 플레이어가 보유한 포션 수가 0보다 크면 포션 수를 1 감소시킵니다.
    case 'USE_POTION':
      if (state.player.items.potions > 0) {
        return {
          ...state,
          player: {
            ...state.player,
            items: {
              ...state.player.items,
              potions: state.player.items.potions - 1
            }
          }
        };
      }
      return state;
    default:
      // 알 수 없는 액션 타입에 대한 에러 처리
      throw new Error('[ERROR] Unknown action type');
  }
};

// Reducer02 컴포넌트는 게임의 UI를 제공하며, useReducer 훅을 사용하여 게임 상태를 관리합니다.
export default function Reducer02() {
  // useReducer를 사용하여 게임의 상태와 dispatch 함수를 초기화합니다.
  // initialState는 게임의 초기 상태를 정의하는데 사용됩니다.
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <div>
      {/* 화면에 플레이어 이름과 현재 레벨을 표시 */}
      <h1>{state.player.name} Level: {state.player.level}</h1>
      {/* 'Level Up' 버튼: 클릭 시 LEVEL_UP 액션을 디스패치하여 레벨을 증가 */}
      <button onClick={() => dispatch({ type: 'LEVEL_UP' })}>Level Up</button>
      {/* 'Use Potion' 버튼: 클릭 시 USE_POTION 액션을 디스패치하여 포션을 사용 */}
      {/* 포션의 수가 0일 경우 버튼을 비활성화*/}
      <button onClick={() => dispatch({ type: 'USE_POTION' })} disabled={state.player.items.potions === 0}>Use Potion</button>
    </div>
  );
}
