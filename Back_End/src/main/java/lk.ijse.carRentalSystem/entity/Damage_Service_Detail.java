package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Damage_Service_Detail {
    @Id
    private String d_Id;
    @Column(nullable = false)
    private String damage_Description;
    @Column(nullable = false)
    private LocalDate service_Start_Date;
    private LocalDate service_End_Date;
    private BigDecimal damage_Cost;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "m_Id",referencedColumnName = "m_Id",nullable = false)
    private Manager mng;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "car_Id",referencedColumnName = "car_Id",nullable = false)
    private Car car;

}
