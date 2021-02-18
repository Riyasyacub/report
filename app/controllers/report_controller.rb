class ReportController < ApplicationController
  def index
    @options = [{'id' => 1, 'name' => 'Riyas'},{'id' => 2, 'name' => 'Javid'},{'id' => 3, 'name' => 'Yacub'}]
  end

  def form_submit
    
    @u = Rep.new(name: params[:name] ,details: params[:details])
    if @u.save

        redirect_to action: :get_report
    else
        render plain: "not" 
    end

    
  end
  def get_report
    @rep = Rep.all
    @college = "Riyas"
    respond_to do |format|
        format.js   
        format.json {render json: @rep }
        format.html { render 'report/get_report' }
    end
  end
  def fetch_year
    if params[:college]
        @college = params[:college]
    end
    # @year = [["2021","2020"],["2020","2020"],["2019","2019"]]
    respond_to do |format|
        # format.js { render "action", :locals => {:college => params[:college]} }
        format.json {render json: @college}
    end
end


private

    def rep_params
        # params.require(:rep).permit(:name, :details)
        params.require(:rep).permit("name", "details")
    end
end


