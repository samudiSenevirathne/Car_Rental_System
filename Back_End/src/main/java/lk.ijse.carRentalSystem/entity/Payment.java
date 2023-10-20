package lk.ijse.carRentalSystem.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Payment {
    @Id
    private String pay_Id;
    @Lob
    private byte[] bank_Slip_Image;
    @Column(nullable = false)
    private BigDecimal loss_Damage_Waiver;
    @Column(nullable = false)
    private BigDecimal rental_Fee;
    private String additional_payment_Description;
    private BigDecimal additional_payment_Cost;
    private LocalDate additional_payment_Date;
    private String additional_charge_Description;
    private BigDecimal additional_charge_Cost;
    private LocalDate additional_charge_Date;

    /*relationship*/
//    book_Id
}
