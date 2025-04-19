import React, { useEffect, useRef, useState } from "react";
import { EditOutlined, RestOutlined, PlusOutlined } from "@ant-design/icons";
import { Modal, message, Input, Form, Button } from "antd";
import blogApi from "../../api/blogApi";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingBlog, setAddingBlog] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const titleInputRef = useRef(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogApi.blog();
        setBlogs(response.data);
      } catch (error) {
        console.error("❌ Error fetching blog data:", error?.response?.data || error.message);
        messageApi.error("Không thể tải danh sách blog!");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (isModalOpen && titleInputRef.current) {
      setTimeout(() => titleInputRef.current?.focus(), 100);
    }
  }, [isModalOpen]);

  const handleEditClick = (blog) => {
    setIsCreateMode(false);
    setEditData({ ...blog });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const { postId, title, content } = editData;

      await blogApi.update(postId, { title, content });

      messageApi.success("Cập nhật blog thành công!");
      setIsModalOpen(false);

      setBlogs((prev) =>
        prev.map((b) => (b.postId === postId ? { ...b, title, content, updatedAt: new Date().toISOString() } : b))
      );
    } catch (error) {
      console.error("❌ Lỗi khi cập nhật blog:", error?.response?.data || error.message);
      messageApi.error("Cập nhật thất bại!");
    }
  };

  const handleAddNewBlog = () => {
    setIsCreateMode(true);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleCreateBlog = async (values) => {
    const payload = {
      title: values.title,
      introduction: {
        title: values.introTitle,
        content: values.introContent,
        images: values.introImages || []
      },
      body: {
        title: values.bodyTitle,
        content: values.bodyContent,
        images: values.bodyImages || []
      },
      conclusion: {
        title: values.conclusionTitle,
        content: values.conclusionContent,
        images: values.conclusionImages || []
      }
    };

    try {
      setAddingBlog(true);
      const response = await blogApi.create(payload);
      const newBlog = response.data;

      messageApi.success("Đã tạo blog mới!");
      setBlogs((prev) => [newBlog, ...prev]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("❌ Lỗi khi tạo blog:", error?.response?.data || error.message);
      messageApi.error("Tạo blog thất bại!");
    } finally {
      setAddingBlog(false);
    }
  };

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-6">
      {contextHolder}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Blog List</h2>
        <button
          onClick={handleAddNewBlog}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 flex items-center gap-2"
        >
          <PlusOutlined />
          ADD NEW BLOG
        </button>
      </div>

      {/* Header */}
      <div className="flex space-x-4 mb-4 font-semibold text-gray-600">
        <div className="w-1/6 text-center">Title</div>
        <div className="w-2/6 text-center">Content</div>
        <div className="w-1/6 text-center">Created At</div>
        <div className="w-1/6 text-center">Updated At</div>
        <div className="w-1/6 text-center">Actions</div>
      </div>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <div
            key={blog.postId}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow border"
          >
            <div className="w-1/6 text-center font-semibold text-gray-800">{blog.title}</div>
            <div className="w-2/6 text-center text-sm text-gray-600 line-clamp-2">{blog.content}</div>
            <div className="w-1/6 text-center text-sm text-gray-500">
              {new Date(blog.createdAt).toLocaleDateString("en-GB")}
            </div>
            <div className="w-1/6 text-center text-sm text-gray-500">
              {new Date(blog.updatedAt).toLocaleDateString("en-GB")}
            </div>
            <div className="w-1/6 flex items-center space-x-4 justify-center">
              <EditOutlined
                className="text-gray-600 hover:text-black text-lg cursor-pointer"
                onClick={() => handleEditClick(blog)}
              />
              <RestOutlined className="text-gray-600 hover:text-red-600 text-lg cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 p-4 bg-gray-100 rounded-lg shadow">
        <div className="font-semibold text-gray-800">Total Blogs</div>
        <div className="font-semibold text-gray-800">{blogs.length} item(s)</div>
      </div>

      {/* Modal */}
      <Modal
        title={isCreateMode ? "Tạo mới Blog" : "Chỉnh sửa Blog"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        {isCreateMode ? (
          <Form
            form={form}
            layout="vertical"
            onFinish={handleCreateBlog}
            initialValues={{
              introImages: [""],
              bodyImages: [""],
              conclusionImages: [""]
            }}
          >
            <Form.Item label="Tiêu đề Blog" name="title" rules={[{ required: true }]}>
              <Input ref={titleInputRef} placeholder="Nhập tiêu đề..." />
            </Form.Item>

            <div className="grid grid-cols-1 gap-4">
              <h3 className="font-semibold">Introduction</h3>
              <Form.Item label="Title" name="introTitle" rules={[{ required: true }]}>
                <Input placeholder="Tiêu đề mở đầu" />
              </Form.Item>
              <Form.Item label="Content" name="introContent" rules={[{ required: true }]}>
                <Input.TextArea placeholder="Nội dung mở đầu" rows={3} />
              </Form.Item>

              <Form.List name="introImages">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey }) => (
                      <div key={key} className="flex items-center gap-2 mb-2">
                        <Form.Item
                          name={name}
                          fieldKey={fieldKey}
                          rules={[{ required: true, message: "Nhập URL ảnh mở đầu!" }]}
                          className="flex-1"
                        >
                          <Input placeholder="URL hình ảnh mở đầu" />
                        </Form.Item>
                        <Button danger size="small" onClick={() => remove(name)}>
                          Xóa
                        </Button>
                      </div>
                    ))}
                    <Form.Item>
                      <Button onClick={() => add()} block type="dashed" icon={<PlusOutlined />}>
                        Thêm ảnh mở đầu
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>

              <h3 className="font-semibold">Body</h3>
              <Form.Item label="Title" name="bodyTitle" rules={[{ required: true }]}>
                <Input placeholder="Tiêu đề thân bài" />
              </Form.Item>
              <Form.Item label="Content" name="bodyContent" rules={[{ required: true }]}>
                <Input.TextArea placeholder="Nội dung thân bài" rows={3} />
              </Form.Item>

              <Form.List name="bodyImages">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey }) => (
                      <div key={key} className="flex items-center gap-2 mb-2">
                        <Form.Item
                          name={name}
                          fieldKey={fieldKey}
                          rules={[{ required: true, message: "Nhập URL ảnh thân bài!" }]}
                          className="flex-1"
                        >
                          <Input placeholder="URL hình ảnh thân bài" />
                        </Form.Item>
                        <Button danger size="small" onClick={() => remove(name)}>
                          Xóa
                        </Button>
                      </div>
                    ))}
                    <Form.Item>
                      <Button onClick={() => add()} block type="dashed" icon={<PlusOutlined />}>
                        Thêm ảnh thân bài
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>

              <h3 className="font-semibold">Conclusion</h3>
              <Form.Item label="Title" name="conclusionTitle" rules={[{ required: true }]}>
                <Input placeholder="Tiêu đề kết luận" />
              </Form.Item>
              <Form.Item label="Content" name="conclusionContent" rules={[{ required: true }]}>
                <Input.TextArea placeholder="Nội dung kết luận" rows={3} />
              </Form.Item>

              <Form.List name="conclusionImages">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey }) => (
                      <div key={key} className="flex items-center gap-2 mb-2">
                        <Form.Item
                          name={name}
                          fieldKey={fieldKey}
                          rules={[{ required: true, message: "Nhập URL ảnh kết luận!" }]}
                          className="flex-1"
                        >
                          <Input placeholder="URL hình ảnh kết luận" />
                        </Form.Item>
                        <Button danger size="small" onClick={() => remove(name)}>
                          Xóa
                        </Button>
                      </div>
                    ))}
                    <Form.Item>
                      <Button onClick={() => add()} block type="dashed" icon={<PlusOutlined />}>
                        Thêm ảnh kết luận
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </div>

            <Form.Item className="text-right mt-4">
              <Button type="primary" htmlType="submit" loading={addingBlog}>
                {addingBlog ? "Đang tạo..." : "Tạo mới"}
              </Button>
            </Form.Item>
          </Form>
        ) : (
          editData && (
            <div className="space-y-4">
              <input
                ref={titleInputRef}
                type="text"
                name="title"
                placeholder="Tiêu đề"
                value={editData.title}
                onChange={handleInputChange}
                className="w-full border-b border-gray-300 outline-none"
              />
              <textarea
                name="content"
                placeholder="Nội dung"
                value={editData.content}
                onChange={handleInputChange}
                className="w-full border-b border-gray-300 outline-none"
                rows={5}
              />
              <Button onClick={handleUpdate} type="primary" block>
                Cập nhật
              </Button>
            </div>
          )
        )}
      </Modal>
    </div>
  );
}
