-- 기존 테이블 삭제 (순서 중요: 참조하는 테이블 먼저 삭제)
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS employers;
DROP TABLE IF EXISTS users;

-- employees 테이블 생성
CREATE TABLE employees (
    user_id uuid REFERENCES auth.users ON DELETE CASCADE,
    name text NOT NULL,
    phone_number text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    PRIMARY KEY (user_id)
);

-- employers 테이블 생성
CREATE TABLE employers (
    user_id uuid REFERENCES auth.users ON DELETE CASCADE,
    company_name text NOT NULL,
    phone_number text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    PRIMARY KEY (user_id)
);

-- RLS (Row Level Security) 정책 활성화
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE employers ENABLE ROW LEVEL SECURITY;

-- employees 테이블 정책
CREATE POLICY "Employees can view their own employee data." ON employees FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Employees can insert their own employee data." ON employees FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Employees can update their own employee data." ON employees FOR UPDATE USING (auth.uid() = user_id);

-- employers 테이블 정책
CREATE POLICY "Employers can view their own employer data." ON employers FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Employers can insert their own employer data." ON employers FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Employers can update their own employer data." ON employers FOR UPDATE USING (auth.uid() = user_id);