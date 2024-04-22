import { useState, useEffect } from 'react'
import { Form, Input, Button, DatePicker } from 'antd'
import moment from 'moment'
import dayjs from 'dayjs'

const FormBookComponent = ({ type, initialValues, onSubmit }) => {
  const [form] = Form.useForm()
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (initialValues && 'publishedDate' in initialValues) {
      form.setFieldsValue({
        ...initialValues,
        publishedDate: initialValues.publishedDate
          ? moment(initialValues.publishedDate, 'DD-MM-YYYY')
          : null,
      })
    }
  }, [form, initialValues])

  const onFinish = (values) => {
    setSubmitting(true)
    if (onSubmit instanceof Function) {
      const result = onSubmit(values)
      if (result instanceof Promise) {
        result
          .then(() => {
            form.resetFields()
          })
          .catch((error) => {
            console.error('Error occurred:', error)
          })
          .finally(() => {
            setSubmitting(false)
          })
      } else {
        console.error('onSubmit must return a Promise.')
        setSubmitting(false)
      }
    } else {
      console.error('onSubmit must be a function.')
      setSubmitting(false)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      form={form}
      name='bookForm'
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout='vertical'
    >
      <Form.Item
        label='PubId'
        name='pubId'
        rules={[
          { required: true, message: 'Please input the PubId!' },
          { type: 'number', message: 'PubId must be a number!' },
        ]}
      >
        <Input type='number' />
      </Form.Item>
      <Form.Item
        label='Title'
        name='title'
        rules={[
          { required: true, message: 'Please input the title of the book!' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Type'
        name='type'
        rules={[
          { required: true, message: 'Please input the type of the book!' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Price'
        name='price'
        rules={[
          { required: true, message: 'Please input the price of the book!' },
        ]}
      >
        <Input type='number' />
      </Form.Item>
      <Form.Item
        label='Advance'
        name='advance'
        rules={[
          { required: true, message: 'Please input the advance of the book!' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Royalty'
        name='royalty'
        rules={[
          { required: true, message: 'Please input the royalty of the book!' },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='YTD Sale'
        name='ytdSale'
        rules={[
          { required: true, message: 'Please input the YTD sale of the book!' },
        ]}
      >
        <Input type='number' />
      </Form.Item>
      <Form.Item
        label='Notes'
        name='notes'
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label='Published Date'
        name='publishedDate'
        rules={[
          {
            required: true,
            message: 'Please select the published date of the book!',
          },
        ]}
      >
        <DatePicker format='DD-MM-YYYY' />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          loading={submitting}
        >
          {type === 'create' ? 'Create Book' : 'Update Book'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormBookComponent
