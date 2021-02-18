module ReportHelper
    def colleges_select
        [["SJCE","1"],["SJIT","2"],["Satyabama","3"]]
    end
    def year_select(college)
        [[`#{college}`,"2020"],["2020","2020"],["2019","2019"]]
    end

end
