// 상태 관리 

import { create } from "zustand";

//# 회원 정보 정의
interface Member {
  id: number;
  name: string;
}

//# (전체)회원 상태 정의
interface MemberState {
  members: Member[]; // 회원 목록을 저장하는 배열
  addMember: (member: Member) => void; // 회원 추가
  updateMember: (id: number, name: string) => void; // 특정 회원을 업데이트
  deleteMember: (id: number) => void; // 특정 회원을 삭제
}

//# 회원에 대한 전역 상태 관리
// 회원 데이터, 회원 추가/수정/삭제
export const useMemberStore = create<MemberState>((set) => ({
  // 초기 상태 설정
  members: [],
  addMember: (member) =>
    set((state) => ({
      members: [...state.members, member],
    })),
  updateMember: (id, name) =>
    set((state) => ({
      members: state.members.map((member) =>
        member.id === id ? { ...member, name } : member
      )
    })),
  deleteMember: (id) => set((state) => ({
    members: state.members.filter((member) => member.id !== id),
  }))
}));

//# 사용자 인증을 관리하는 스토어
interface AuthState {
  user: string | null; // 현재 로그인한 사용자
  login: (user: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (user) => set({ user }), // 로그인 상태 설정
  logout: () => set({ user: null }), // 로그아웃 상태 설정
}));