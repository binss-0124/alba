
-- attendance 테이블 생성
CREATE TABLE attendance (
    id bigserial PRIMARY KEY,
    employee_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    employer_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    clock_in timestamp with time zone NOT NULL,
    clock_out timestamp with time zone,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);

-- RLS (Row Level Security) 정책 활성화
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;

-- employees 정책
-- 자신의 출퇴근 기록만 볼 수 있음
CREATE POLICY "Employees can view their own attendance."
ON attendance FOR SELECT
USING ( auth.uid() = employee_id );

-- 자신의 출퇴근 기록만 추가할 수 있음
CREATE POLICY "Employees can insert their own attendance."
ON attendance FOR INSERT
WITH CHECK ( auth.uid() = employee_id );

-- 자신의 퇴근 시간을 업데이트할 수 있음
CREATE POLICY "Employees can update their own clock_out."
ON attendance FOR UPDATE
USING ( auth.uid() = employee_id )
WITH CHECK ( auth.uid() = employee_id );

-- employers 정책
-- 자신의 직원들의 출퇴근 기록을 볼 수 있음
CREATE POLICY "Employers can view the attendance of their employees."
ON attendance FOR SELECT
USING ( EXISTS (
    SELECT 1 FROM employees e
    WHERE e.user_id = attendance.employee_id
    AND e.branch_code = (SELECT branch_code FROM employers WHERE user_id = auth.uid())
));
