
class Weather {
    constructor(_parent, _city, _description, _temp, _feels_like, _humidity, _icon) {
        this.parent = document.querySelector(_parent);
        this.city = _city;
        this.description = _description;
        this.temp = _temp;
        this.feels_like = _feels_like;
        this.humidity = _humidity;
        this.icon = _icon;
    }

    render() {
        let html = `
                <div class="box p-3 col-lg-4 col-md-12  mx-lg-3 ">
                    <div class="title d-flex justify-content-between">
                        <div>
                            <h2 class="m-0">${this.city}</h2>
                            <p>${this.description}</p>
                        </div>
                        <div class="p-1">
                            ${this.icon}
                        </div>
                    </div>
                    <table class="values col-12">
                        <tr class="row mt-1 p-1">
                            <th class="col-4 text-center">טמפ' נמדדת</th>
                            <th class="col-4 text-center">טמפ' מורגשת</th>
                            <th class="col-4 text-center">לחות</th>
                        </tr>
                        <tr class="row mt-1 p-1">
                            <td class="col-4 text-center">
                                <p>℃${Math.round(this.temp)}</p>
                            </td>
                            <td class="col-4 text-center">
                                <p>℃${Math.round(this.feels_like)}</p>
                            </td>
                            <td class="col-4 text-center">
                                <p>℃${Math.round(this.humidity)}</p>
                            </td>
                        </tr>
                    </table>
                </div>
        `
        this.parent.innerHTML += html;
    }
}