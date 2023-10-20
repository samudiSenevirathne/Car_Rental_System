package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Register {
    @Id
    private String r_Id;
    @Column(nullable = false)
    private LocalDate date;
    @Column(nullable = false)
    private LocalTime time;

    @OneToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "username",referencedColumnName = "username",nullable = false)
    private Customer cus;


}