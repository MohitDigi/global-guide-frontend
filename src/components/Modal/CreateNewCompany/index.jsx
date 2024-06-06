import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Button, ConfigProvider, Form, Input, Select } from "antd";

import { createCompany } from "../../../redux/slices/companySlice";
import styled from "./CreateNewCompany.style";

const { TextArea } = Input;

const CreateNewTicket = ({ open, onClose, filters }) => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const [file, setFile] = useState(null);
  console.log("file::::::::::::::;", file);

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open, form]);

  const createHandler = (values) => {
    const data = new FormData();

    for (const key in values) {
      if (key === "imageUrl") {
        data.append("imageUrl", file);
      } else {
        data.append(key, values[key]);
      }
    }
    dispatch(createCompany(data)).then(() => {
      setFile(null);
      onClose();
      // dispatch(getTickets(filters));
    });
  };

  const theme = {
    components: {
      Select: {
        colorPrimaryActive: "rgb(225, 29, 7)",
        colorBorder: "#D0D5DD",
      },
    },
  };
  return (
    <ConfigProvider theme={theme}>
      <styled.ModalWrapper
        open={open}
        closeIcon={false}
        width={"25.5rem"}
        footer={[
          <Button
            key="back"
            className="cancel-btn"
            onClick={() => {
              setFile(null);
              onClose();
            }}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            className="submit-btn"
            type="primary"
            onClick={() => form.submit()}
          >
            Create
          </Button>,
        ]}
      >
        <styled.Title>Create New Tickets</styled.Title>
        <Form
          layout="vertical"
          onFinish={createHandler}
          form={form}
          requiredMark={false}
        >
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: "Address is required!",
              },

              {
                max: 100,
                message: "Address name cannot exceed 100 characters!",
              },
              {
                pattern: /^(?!.*\s{2,})[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                message: "Invalid value for Address!",
              },
            ]}
          >
            <Input className="create-warehouse" placeholder="Address" />
          </Form.Item>
          <Form.Item
            name="companyName"
            label="Company name"
            rules={[
              {
                required: true,
                message: "Company name is required!",
              },
              {
                min: 5,
                message: "Company name must be at least 5 characters long!",
              },
              {
                max: 100,
                message: "Company name cannot exceed 100 characters!",
              },
              {
                pattern: /^(?!.*\s{2,})[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                message: "Invalid value for Company Name!",
              },
            ]}
          >
            <Input className="create-warehouse" placeholder="Company Name" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              { required: true, message: "Category is required!" },
              {
                min: 10,
                message: "Phone must be at least 10 characters long!",
              },
              {
                max: 15,
                message: "Category cannot exceed 15 characters!",
              },
              {
                // pattern: /^(?!.*\s{2,})[a-zA-Z]+(?:\s[a-zA-Z]+)*$/,
                message: "Invalid value for Phone!",
              },
            ]}
          >
            <Input placeholder="Category" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Description is required!" },
              {
                min: 10,
                message: "Description must be at least 10 characters long!",
              },
              {
                max: 500,
                message: "Description cannot exceed 500 characters!",
              },
              {
                pattern: /^(?!.*\s{2,})(?=[^\s]*[a-zA-Z])[^\s]+(?:\s+[^\s]+)*$/,
                message: "Invalid value for Description!",
              },
            ]}
          >
            <TextArea
              className="description"
              placeholder="Description"
              rows={4}
            />
          </Form.Item>
          <Form.Item name="imageurl" label="Upload file">
            <div className="outer-div">
              <p className="paragraph">
                {file?.name && file.name.length > 34
                  ? `${file.name.substring(0, 34)}...`
                  : file?.name || (
                      <span className="placeholder">Choose file to upload</span>
                    )}
              </p>
              <label htmlFor="image" className="file-label">
                <span className="browse-button">Browse File</span>
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </div>
          </Form.Item>
        </Form>
      </styled.ModalWrapper>
    </ConfigProvider>
  );
};

export default CreateNewTicket;
CreateNewTicket.propTypes = {
  open: PropTypes.any,
  onClose: PropTypes.any,
  filters: PropTypes.any,
};
