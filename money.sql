-- work_records 테이블 생성
CREATE TABLE work_records (
    id bigserial PRIMARY KEY,
    employee_id uuid REFERENCES auth.users ON DELETE CASCADE,
    date date NOT NULL,
    start_time time NOT NULL,
    end_time time NOT NULL,
    hourly_wage integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);

-- RLS (Row Level Security) 정책 활성화
ALTER TABLE work_records ENABLE ROW LEVEL SECURITY;

-- employers 테이블 정책
CREATE POLICY "Employers can view work records of their employees." ON work_records FOR SELECT USING (EXISTS (SELECT 1 FROM employers WHERE user_id = auth.uid()));
CREATE POLICY "Employers can insert work records for their employees." ON work_records FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM employers WHERE user_id = auth.uid()));
