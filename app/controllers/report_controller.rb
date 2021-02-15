class ReportController < ApplicationController
  def index
    @options = [{'id' => 1, 'name' => 'Riyas'},{'id' => 2, 'name' => 'Javid'},{'id' => 3, 'name' => 'Yacub'}]
  end

  def form_submit
    @u = user_reports
  end

  def get_report
  end
end
