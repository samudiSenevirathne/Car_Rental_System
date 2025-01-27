package lk.ijse.carRentalSystem.service;

import lk.ijse.carRentalSystem.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    void addCustomer(CustomerDTO dto);

    List<CustomerDTO> getAllCustomer();

    CustomerDTO findCustomer(String nic);

    void updateCustomer(CustomerDTO c);

    void  checkCustomer(String username,String password);

    String findCustomerNIC(String username);

}
