import React, { useReducer } from 'react'

//! 1. state의 형태가 복잡할 때

//? 게임 캐릭터 상태 (복잡한 객체)
type GameState = {
  player: {
    name: string;
    level: number;
    item: {
      potions: number;
      coins: number;
      equipment: {
        armor: string;
        weapon: string;
      }
    }
  }
  enemies: number;
  gameStatus: string;
}

const initialValue: GameState = {
  player: {
    name: '이승아',
    level: 1,
    item: {
      potions: 5,
      coins: 100,
      equipment: {
        armor: '갑옷',
        weapon: '검'
      }
    }
  },
  enemies: 5,
  gameStatus: 'Active'
}

//? 게임 상태 업데이트 로직
// : 게임 내에서 플레이어의 레벨 증가, 아이템 사용

// >> useReducer를 사용하여 상태 관리
//    : 액션을 정의, 해당 엑션에 따른 상태 업데이트

//* Action 타입 정의
type Action = { type: 'LEVEL_UP' } | { type: 'USE_POTION' };

//* gameReducer 함수
// : 게임의 상태를 업데이트하는 로직을 포함
// : 현재 게임 상태(state), 액션(action)을 인자로 받아 새로운 상태 반환
const gameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    // 'LEVEL_UP' 액션 처리: 플레이어의 레벨을 1 증가
    case 'LEVEL_UP':
      return {
        ...state,
        player: {
          ...state.player,
          level: state.player.level + 1
        }
      };
    // 'USE_POTION' 액션 처리: 플레이어가 보유한 포션 수가 0보다 크면 포션 수를 1 감소
    case 'USE_POTION':
      if (state.player.item.potions > 0) {
        return {
          ...state,
          player: {
            ...state.player,
            item: {
              ...state.player.item,
              potions: state.player.item.potions - 1
            }
          }
        }
      }
      return state;
    // 알 수 없는 액션에 대한 에러 처리
    default:
      throw new Error('[ERROR] Unknown action type');
  }
}

export default function Reducer02() {
  const [state, dispatch] = useReducer(gameReducer, initialValue);
  return (
    <div>
      <h1>{state.player.name} Level: {state.player.level}</h1>
      <p>Potions: {state.player.item.potions}</p>

      <button onClick={() => dispatch({ type: 'LEVEL_UP' })}>
        Level Up
      </button>

      <button 
        onClick={() => dispatch({ type: 'USE_POTION' })}
        disabled={state.player.item.potions === 0}
      >
        Use Potion ({state.player.item.potions})
      </button>
    </div>
  )
}
