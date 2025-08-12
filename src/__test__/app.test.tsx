// @ts-nocheck
import { render, screen, fireEvent, within, waitFor } from '@testing-library/react'
import { vi } from 'vitest'

import { MemoryRouter } from 'react-router-dom'
import App from '../App.tsx'

import '../setupTests'

describe('게시물 관리 시스템 테스트 시작', () => {
  beforeEach(() => {
    // localStorage 초기화
    localStorage.clear()
    // console 경고 무시
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('게시물을 확인 플로우', () => {
    test('게시물을 검색하고 게시물을 클릭하면 게시물 상세 페이지로 이동한다', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      )
      const searchInput = screen.getByPlaceholderText('게시물 검색...')
      fireEvent.change(searchInput, { target: { value: 'have' } })
      fireEvent.keyPress(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 })
    })
  })
})
