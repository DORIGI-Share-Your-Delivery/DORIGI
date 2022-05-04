package dorigi.backend.domain;

public class Restaurant {

    double restaurant_id;
    String name;
    int phone_number;
    String address;
    String categori;

    public double getRestaurant_id() {
        return restaurant_id;
    }

    public void setRestaurant_id(double restaurant_id) {
        this.restaurant_id = restaurant_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
