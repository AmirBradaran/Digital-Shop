import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  Input,
  Modal,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SyncIcon from "@mui/icons-material/Sync";
import { Share } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import StarRateIcon from "@mui/icons-material/StarRate";
import ChatIcon from "@mui/icons-material/Chat";
import ErrorIcon from "@mui/icons-material/Error";
import GppGoodIcon from "@mui/icons-material/GppGood";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import Question from "./Question";

// داده‌های پیش‌فرض برای زمانی که API مقداری برنگرداند
const defaultData = {
  images: [
    "https://api.arshamelectronicm.com/images/products/image1.jpg",
    "https://api.arshamelectronicm.com/images/products/image2.jpg",
    "https://api.arshamelectronicm.com/images/products/image3.jpg",
    "https://api.arshamelectronicm.com/images/products/image4.jpg",
    "https://api.arshamelectronicm.com/images/products/image5.jpg",
  ],
  colors: [
    { id: 1, name: "خاکستری", code: "#9CA3AF" },
    { id: 2, name: "مشکی", code: "#111827" },
    { id: 3, name: "آبی روشن", code: "#38BDF8" },
  ],
  features: [
    { id: 1, title: "جنس بدنه", value: "تیتانیوم" },
    { id: 2, title: "مقدار حافظه RAM", value: "12 گیگابایت" },
    { id: 3, title: "باتری", value: "لیتیوم 6000 میلی" },
    { id: 4, title: "پردازنده", value: "AM32x new product" },
    { id: 5, title: "فرکانس پردازنده", value: "32HR" },
    { id: 6, title: "وزن", value: "230 گرم" },
    { id: 7, title: "نسخه بلوتوث", value: "7r" },
    { id: 8, title: "نسخه وای فای", value: "3prm new test" },
    { id: 9, title: "سیستم عامل", value: "IOS" },
    { id: 10, title: "پردازنده گرافیکی", value: "Hiliston 7200" },
    { id: 11, title: "دوربین جلو", value: "12 MP" },
    { id: 12, title: "دوربین عقب", value: "24MP" },
  ],
};

export default function ProductDetails({ productId }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState(defaultData.images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [likeDislike, setLikeDislike] = useState(null);
  const [titleComment, setTitleComment] = useState("");
  const [textComment, setTextComment] = useState("");
  const [textQuestion, setTextQuestion] = useState("");
  const [comments, setComments] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `https://api.arshamelectronicm.com/products/${productId}`
        );
        if (!response.ok) {
          throw new Error("محصول یافت نشد");
        }
        const data = await response.json();

        setProduct(
          data.product || {
            name: "محصول نمونه",
            category: "دسته‌بندی نمونه",
            description: "توضیحات نمونه برای محصول",
            price: 12000000,
            rating: 4.5,
            reviewsCount: 128,
            ...defaultData,
          }
        );
        setComments(data.comments || []);
        setQuestions(data.questions || []);
        setCurrentImage(data.product?.images?.[0] || defaultData.images[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleComment = () => {
    if (!titleComment || !textComment) return;

    const newComment = {
      id: Date.now(),
      title: titleComment,
      text: textComment,
      likeDislike,
      date: new Date().toLocaleDateString("fa-IR"),
    };

    setComments([...comments, newComment]);
    setTitleComment("");
    setTextComment("");
    setLikeDislike(null);
  };

  const handleQuestion = () => {
    if (!textQuestion) return;

    const newQuestion = {
      id: Date.now(),
      text: textQuestion,
      date: new Date().toLocaleDateString("fa-IR"),
    };

    setQuestions([...questions, newQuestion]);
    setTextQuestion("");
  };

  if (loading) return <Typography>در حال بارگذاری...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!product) return <Typography>محصول یافت نشد</Typography>;

  // استفاده از داده‌های محصول یا داده‌های پیش‌فرض
  const productImages = product.images || defaultData.images;
  const productColors = product.colors || defaultData.colors;
  const productFeatures = product.features || defaultData.features;

  return (
    <>
      <Stack
        sx={{
          justifyContent: "center",
          flexDirection: "row",
          direction: "rtl",
        }}
      >
        <Box
          sx={{
            width: "96vw",
            maxWidth: "1500px",
            backgroundColor: "white ",
            boxShadow: " 0 4px 10px rgba(0, 0, 0, 0.1)",
            marginTop: "10px",
            borderRadius: "10px",
            border: " 1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <Stack
            sx={{
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              padding: "15px",
            }}
          >
            {/* تصاویر محصول */}
            <Box sx={{ flex: "1" }}>
              <Stack sx={{ flexDirection: "row", gap: "10px" }}>
                <IconButton>
                  <FavoriteBorderIcon sx={{ fontSize: "28px" }} />
                </IconButton>
                <IconButton>
                  <SyncIcon sx={{ fontSize: "28px" }} />
                </IconButton>
                <IconButton>
                  <Share sx={{ fontSize: "28px" }} />
                </IconButton>
              </Stack>

              <Stack
                sx={{ justifyContent: { xs: "center", lg: "flex-start" } }}
              >
                <Box
                  sx={{
                    width: { xs: "80vw", lg: "29.5vw" },
                    maxWidth: "455px",
                    border: "2px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    style={{ width: "100%" }}
                    src={currentImage}
                    alt={product.name}
                  />
                </Box>
              </Stack>

              <Stack
                sx={{
                  marginTop: "15px",
                  flexDirection: "row",
                  gap: "5px",
                  justifyContent: { xs: "center", lg: "flex-start" },
                }}
              >
                {productImages.map((img, index) => (
                  <Box
                    key={index}
                    onClick={() => {
                      setCurrentImage(img);
                      if (index === productImages.length - 1) openModal();
                    }}
                    sx={{
                      width: { xs: "auto", lg: "5.6vw" },
                      maxWidth: "85px",
                      height: "85px",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      borderRadius: "10px",
                      overflow: "hidden",
                      cursor: "pointer",
                      position: "relative",
                    }}
                  >
                    {index === productImages.length - 1 && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          zIndex: "2",
                        }}
                      >
                        <MoreHorizIcon />
                      </Box>
                    )}
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        filter:
                          index === productImages.length - 1
                            ? "blur(3px)"
                            : "none",
                      }}
                      src={img}
                      alt={`تصویر ${index + 1} محصول`}
                    />
                  </Box>
                ))}
              </Stack>

              {/* مودال نمایش تصاویر */}
              <Modal open={isModalOpen} onClose={closeModal}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "background.paper",
                    p: 3,
                    borderRadius: 2,
                    width: "80%",
                    maxWidth: 800,
                    outline: "none",
                    boxShadow: 24,
                  }}
                >
                  <IconButton
                    onClick={closeModal}
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "grey.700",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  <Box
                    component="img"
                    src={currentImage}
                    alt="Current"
                    sx={{
                      width: "100%",
                      maxHeight: 400,
                      objectFit: "contain",
                      mb: 2,
                    }}
                  />

                  <Stack direction="row" spacing={2} justifyContent="center">
                    {productImages.map((img, index) => (
                      <Box
                        key={index}
                        component="img"
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setCurrentImage(img)}
                        sx={{
                          width: { xs: 50, lg: 100 },
                          height: { xs: 50, lg: 100 },
                          objectFit: "cover",
                          cursor: "pointer",
                          border:
                            img === currentImage
                              ? "2px solid blue"
                              : "2px solid transparent",
                          borderRadius: 1,
                          transition: "border 0.3s ease",
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Modal>
            </Box>

            {/* بخش اطلاعات محصول */}
            <Box
              sx={{
                flex: "2",
                paddingRight: { xs: "0px", lg: "40px" },
                maxWidth: "650px",
                marginTop: { xs: "20px", lg: "0px" },
              }}
            >
              <Box>
                <Stack sx={{ flexDirection: "row", gap: "5px" }}>
                  <Stack sx={{ flexDirection: "row", gap: "5px" }}>
                    <Link to="/">
                      <Typography
                        sx={{
                          color: "black",
                          "&:hover": {
                            color: "#0EA5E9",
                            transition: "all .3s",
                          },
                          fontSize: "15px",
                        }}
                      >
                        خانه
                      </Typography>
                    </Link>
                    <NavigateBeforeIcon sx={{ fontSize: "20px" }} />
                  </Stack>
                  <Stack sx={{ flexDirection: "row", gap: "5px" }}>
                    <Link to="/search">
                      <Typography
                        sx={{
                          color: "black",
                          "&:hover": {
                            color: "#0EA5E9",
                            transition: "all .3s",
                          },
                          fontSize: "15px",
                        }}
                      >
                        محصولات
                      </Typography>
                    </Link>
                    <NavigateBeforeIcon sx={{ fontSize: "20px" }} />
                  </Stack>
                  <Stack sx={{ flexDirection: "row", gap: "5px" }}>
                    <Typography
                      sx={{
                        color: "#0EA5E9",
                        fontSize: "15px",
                      }}
                    >
                      {product.category}
                    </Typography>
                  </Stack>
                </Stack>

                <Box
                  sx={{
                    width: { xs: "100%", lg: "37.5vw" },
                    marginTop: "20px",
                  }}
                >
                  <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
                    {product.name}
                  </Typography>

                  <Box sx={{ marginTop: "15px" }}>
                    <Typography sx={{ color: "#A1A1AA", fontSize: "13px" }}>
                      {product.description}
                    </Typography>
                  </Box>

                  <Box>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        gap: "20px",
                        marginTop: "10px",
                        alignItems: "center",
                      }}
                    >
                      <Stack
                        sx={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <StarRateIcon
                          sx={{ color: "gold", fontSize: "20px" }}
                        />
                        <Typography sx={{ fontSize: "15px", color: "#71717A" }}>
                          ({product.reviewsCount}+) {product.rating}
                        </Typography>
                      </Stack>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          color: "#38BDF8",
                          gap: "5px",
                          alignItems: "center",
                        }}
                      >
                        <ChatIcon sx={{ fontSize: "18px" }} />
                        <Typography sx={{ fontSize: "15px" }}>
                          {comments.length} دیدگاه
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>

                  <Box sx={{ marginTop: "20px" }}>
                    <Typography sx={{ color: "#3F3F46" }}>
                      ویژگی های محصول:
                    </Typography>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        gap: "10px",
                        flexWrap: "wrap",
                        width: { xs: "100%", lg: "450px" },
                        maxWidth: "450px",
                        marginTop: "15px",
                      }}
                    >
                      {productFeatures.slice(0, 6).map((feature) => (
                        <Stack
                          key={feature.id}
                          sx={{
                            backgroundColor: "#F3F4F6",
                            width: "125px",
                            height: "55px",
                            justifyContent: "center",
                            paddingRight: "8px",
                            borderRadius: "5px",
                          }}
                        >
                          <Typography
                            sx={{ color: "#71717A", fontSize: "11.25px" }}
                          >
                            {feature.title}:
                          </Typography>
                          <Typography
                            sx={{ fontSize: "13.5px", color: "#3F3F46" }}
                          >
                            {feature.value}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>

                  <Stack
                    sx={{
                      flexDirection: "row",
                      gap: "5px",
                      color: "#71717A",
                      borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                      marginTop: "30px",
                      paddingTop: "10px",
                      width: { xs: "100%", lg: "37vw" },
                      maxWidth: "570px",
                    }}
                  >
                    <ErrorIcon sx={{ fontSize: "18px" }} />
                    <Typography sx={{ fontSize: "13px" }}>
                      {product.returnPolicy ||
                        "درخواست مرجوع کردن کالا در گروه لپ تاپ با دلیل 'انصراف از خرید' تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد."}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>

            {/* بخش قیمت و افزودن به سبد خرید */}
            <Box
              sx={{
                flex: "3",
                paddingRight: { xs: "0px", lg: "29px" },
              }}
            >
              <Box>
                {/* انتخاب رنگ */}
                <Box sx={{ paddingTop: "30px" }}>
                  <Typography>رنگ:</Typography>
                  <Stack
                    sx={{ gap: "8px", flexDirection: "row", flexWrap: "wrap" }}
                  >
                    {productColors.map((color) => (
                      <Stack
                        key={color.id}
                        onClick={() => setSelectedColor(color.name)}
                        sx={{
                          display: "inline-flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "8px",
                          border: `2px solid ${
                            selectedColor === color.name
                              ? "rgba(56, 189, 248, 1)"
                              : "rgba(0, 0, 0, 0.1)"
                          }`,
                          padding: "10px 8px",
                          borderRadius: "50px",
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "#F3F4F6" },
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: color.code,
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                          }}
                        ></Box>
                        <Typography sx={{ fontSize: "13px" }}>
                          {color.name}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>

                {/* اطلاعات خرید */}
                <Box>
                  <Box
                    sx={{
                      border: "1.5px solid rgba(0, 0, 0, 0.1)",
                      marginTop: "30px",
                      borderRadius: "10px",
                      padding: "0px 12px",
                    }}
                  >
                    <Stack
                      sx={{
                        flexDirection: "row",
                        borderBottom: ".5px solid rgba(0, 0, 0, 0.1)",
                        paddingBottom: "18px",
                        alignItems: "center",
                        gap: "5px",
                        paddingTop: "20px",
                      }}
                    >
                      <GppGoodIcon
                        sx={{ color: "#52525B", fontSize: "20px" }}
                      />
                      <Typography sx={{ color: "#52525B", fontSize: "15px" }}>
                        {product.warranty || "گارانتی 18 ماهه"}
                      </Typography>
                    </Stack>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        borderBottom: ".5px solid rgba(0, 0, 0, 0.1)",
                        paddingBottom: "18px",
                        alignItems: "center",
                        gap: "5px",
                        paddingTop: "20px",
                      }}
                    >
                      <LocalShippingIcon
                        sx={{ color: "#52525B", fontSize: "20px" }}
                      />
                      <Typography sx={{ color: "#52525B", fontSize: "15px" }}>
                        {product.shipping || "ارسال 2 روز کاری"}
                      </Typography>
                    </Stack>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        borderBottom: ".5px solid rgba(0, 0, 0, 0.1)",
                        paddingBottom: "18px",
                        alignItems: "center",
                        gap: "5px",
                        paddingTop: "20px",
                      }}
                    >
                      <ThumbUpOffAltIcon
                        sx={{ color: "#22C55E", fontSize: "20px" }}
                      />
                      <Stack sx={{ flexDirection: "row", gap: "5px" }}>
                        <Typography sx={{ color: "#22C55E", fontSize: "15px" }}>
                          رضایت از محصول:
                        </Typography>
                        <Typography sx={{ color: "#22C55E" }}>
                          {product.satisfactionRate || "95"}%
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        paddingBottom: "18px",
                        alignItems: "center",
                        gap: "5px",
                        color: "#52525B",
                      }}
                    >
                      <Stack
                        sx={{
                          flexDirection: "row",
                          gap: "5px",
                          alignItems: "end",
                          flex: "4",
                          color: "#F87171",
                          paddingTop: "40px",
                        }}
                      >
                        <Typography sx={{ fontSize: "11px" }}>
                          {product.stockStatus ||
                            "تنها 2 عدد در انبار باقی مانده"}
                        </Typography>
                      </Stack>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          gap: "5px",
                          alignItems: "end",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "18px", fontWeight: "600" }}
                        >
                          {product.price.toLocaleString()}
                        </Typography>
                        <Typography sx={{ fontSize: "11px" }}>تومان</Typography>
                      </Stack>
                    </Stack>
                    <Stack>
                      <Button
                        sx={{
                          background:
                            "linear-gradient(to right, #38BDF8, #2A9DF4)",
                          color: "#fff",
                          padding: "7px 20px",
                          borderRadius: "8px",
                          "&:hover": {
                            background:
                              "linear-gradient(to right, #2A9DF4, #38BDF8)",
                          },
                          marginBottom: "10px",
                        }}
                      >
                        افزودن به سبد خرید
                      </Button>
                    </Stack>
                  </Box>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      gap: "5px",
                      color: "#52525B",
                      paddingTop: "10px",
                      alignItems: "center",
                    }}
                  >
                    <ErrorIcon sx={{ fontSize: "18px" }} />
                    <Typography sx={{ fontSize: "13px" }}>
                      {product.shippingPolicy ||
                        "هزینه پست برای سبد خرید بالای 400 هزار تومان رایگان میباشد."}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Stack>

          {/* بخش مشخصات، دیدگاه‌ها و پرسش‌ها */}
          <Stack>
            <Stack
              sx={{
                flexDirection: "row",
                color: "#52525B",
                gap: "25px",
                borderBottom: "0.5px solid rgba(0, 0, 0, 0.1)",
                width: "98%",
                margin: "0 auto",
                padding: "60px 0px 10px 0px",
              }}
            >
              <Typography>مشخصات</Typography>
              <Typography>دیدگاه ها</Typography>
              <Typography>پرسش ها</Typography>
            </Stack>

            <Box sx={{ paddingTop: "15px" }}>
              {/* مشخصات محصول */}
              <Box sx={{ paddingX: "30px" }}>
                <Typography
                  sx={{
                    borderBottom: ".5px solid blue",
                    display: "inline-block",
                  }}
                >
                  مشخصات محصول
                </Typography>
              </Box>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "20px",
                  justifyContent: "center",
                  paddingTop: "10px",
                  paddingX: { xs: "20px", md: "0px" },
                }}
              >
                {productFeatures.map((feature) => (
                  <Stack
                    key={feature.id}
                    sx={{
                      flexDirection: "row",
                      border: "0.5px solid rgba(0, 0, 0, 0.1)",
                      padding: "10px",
                      borderRadius: "10px",
                      justifyContent: "space-between",
                      width: { xs: "100%", md: "44vw" },
                    }}
                  >
                    <Typography sx={{ color: "#3F3F46", fontSize: "13px" }}>
                      {feature.title}:
                    </Typography>
                    <Typography sx={{ color: "#3F3F46", fontSize: "13px" }}>
                      {feature.value}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack sx={{ justifyContent: "center", flexDirection: "row" }}>
                <Box
                  sx={{
                    borderBottom: "0.5px solid rgba(0, 0, 0, 0.1)",
                    width: "98%",
                    marginTop: "25px",
                  }}
                ></Box>
              </Stack>

              {/* بخش دیدگاه‌ها */}
              <Stack
                sx={{ flexDirection: { xs: "column", md: "row" }, gap: "25px" }}
              >
                <Box
                  sx={{
                    paddingRight: { xs: "0px", md: "30px" },
                    paddingX: { xs: "15px", md: "auto" },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        borderBottom: ".5px solid blue",
                        display: "inline-block",
                        paddingTop: "15px",
                        fontSize: "15px",
                        color: "#27272A",
                      }}
                    >
                      دیدگاه ها
                    </Typography>
                  </Box>
                  <Box>
                    <Box sx={{ paddingTop: "10px" }}>
                      <Typography sx={{ fontSize: "13px" }}>
                        شما هم دیدگاه خود را ثبت کنید
                      </Typography>
                    </Box>
                    <Box>
                      <Input
                        value={titleComment}
                        onChange={(e) => setTitleComment(e.target.value)}
                        sx={{
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          marginTop: "10px",
                          width: { xs: "100%", md: "350px" },
                        }}
                        placeholder="عنوان دیدگاه"
                      />
                    </Box>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        gap: "16px",
                        marginTop: "12px",
                      }}
                    >
                      <Button
                        onClick={() => setLikeDislike("like")}
                        sx={{
                          display: "flex",
                          border: `0.5px solid ${
                            likeDislike === "like" ? "#22C55E" : "#ccc"
                          }`,
                          color: likeDislike === "like" ? "#22C55E" : "#4B5563",
                          gap: "5px",
                          paddingY: "10px",
                          paddingX: { xs: "0px", md: "20px" },
                          width: { xs: "50%", md: "auto" },
                        }}
                      >
                        <ThumbUpOffAltIcon sx={{ color: "#22C55E" }} />
                        پیشنهاد میشود
                      </Button>
                      <Button
                        onClick={() => setLikeDislike("dislike")}
                        sx={{
                          display: "flex",
                          border: `1px solid ${
                            likeDislike === "dislike" ? "#F87171" : "#ccc"
                          }`,
                          color:
                            likeDislike === "dislike" ? "#F87171" : "#4B5563",
                          gap: "5px",
                          paddingY: "10px",
                          paddingX: { xs: "0px", md: "20px" },
                          width: { xs: "50%", md: "auto" },
                        }}
                      >
                        <ThumbDownAltIcon sx={{ color: "#F87171" }} />
                        پیشنهاد نمیشود
                      </Button>
                    </Stack>
                    <Box sx={{ marginTop: "13px", paddingLeft: "10px" }}>
                      <TextareaAutosize
                        value={textComment}
                        onChange={(e) => setTextComment(e.target.value)}
                        minRows={8}
                        placeholder="متن دیدگاه"
                        style={{
                          padding: "5px",
                          borderRadius: "8px",
                          border: "1px solid #ccc",
                          width: "100%",
                        }}
                      />
                    </Box>
                    <Button
                      onClick={handleComment}
                      sx={{
                        background:
                          "linear-gradient(to right, #38BDF8, #2A9DF4)",
                        color: "#fff",
                        borderRadius: "8px",
                        "&:hover": {
                          background:
                            "linear-gradient(to right, #2A9DF4, #38BDF8)",
                        },
                        marginTop: "10px",
                        paddingY: "7px",
                        paddingX: { xs: "0px", md: "159px" },
                        width: { xs: "100%", md: "auto" },
                      }}
                    >
                      ارسال
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ paddingTop: { xs: "20px", md: "40px" } }}>
                  {comments.map((comment) => (
                    <Comment
                      key={comment.id}
                      titleComment={comment.title}
                      textComment={comment.text}
                      likeDislike={comment.likeDislike}
                      date={comment.date}
                    />
                  ))}
                </Box>
              </Stack>

              <Stack sx={{ flexDirection: "row", justifyContent: "center" }}>
                <Box
                  sx={{
                    borderBottom: "0.5px solid rgba(0, 0, 0, 0.1)",
                    width: "98%",
                    marginTop: "50px",
                  }}
                ></Box>
              </Stack>

              {/* بخش پرسش‌ها */}
              <Stack>
                <Stack
                  sx={{
                    flexDirection: { xs: "column", md: "row" },
                    gap: "25px",
                  }}
                >
                  <Box
                    sx={{
                      paddingRight: { xs: "0px", md: "30px" },
                      paddingX: { xs: "15px", md: "auto" },
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          borderBottom: ".5px solid blue",
                          display: "inline-block",
                          paddingTop: "15px",
                          fontSize: "15px",
                          color: "#27272A",
                        }}
                      >
                        پرسش ها
                      </Typography>
                    </Box>
                    <Box>
                      <Box sx={{ paddingTop: "40px" }}>
                        <Typography sx={{ fontSize: "13px" }}>
                          اگر سوالی دارید بپرسید
                        </Typography>
                      </Box>
                      <Box sx={{ marginTop: "13px", paddingLeft: "10px" }}>
                        <TextareaAutosize
                          value={textQuestion}
                          onChange={(e) => setTextQuestion(e.target.value)}
                          minRows={8}
                          placeholder="متن پرسش"
                          style={{
                            padding: "5px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            width: "100%",
                          }}
                        />
                      </Box>
                      <Button
                        onClick={handleQuestion}
                        sx={{
                          background:
                            "linear-gradient(to right, #38BDF8, #2A9DF4)",
                          color: "#fff",
                          padding: "7px 159px",
                          borderRadius: "8px",
                          "&:hover": {
                            background:
                              "linear-gradient(to right, #2A9DF4, #38BDF8)",
                          },
                          marginTop: "10px",
                          paddingX: { xs: "0px", md: "159px" },
                          width: { xs: "100%", md: "auto" },
                        }}
                      >
                        ارسال
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ paddingTop: { xs: "20px", md: "40px" } }}>
                    {questions.map((question) => (
                      <Question
                        key={question.id}
                        textQuestion={question.text}
                        date={question.date}
                      />
                    ))}
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
          <Stack sx={{ paddingTop: "20px" }}></Stack>
        </Box>
      </Stack>
    </>
  );
}
